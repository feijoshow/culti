const fs = require('fs');
const path = require('path');

const cropsPath = path.join(__dirname, '../lib/data/crops.ts');
const cropsContent = fs.readFileSync(cropsPath, 'utf8');

function parseObject(str) {
    str = str.trim();
    const result = {};
    let buffer = '';
    let depth = 0;
    let currentKey = '';
    let isInString = false;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === '"' && str[i-1] !== '\\') {
            isInString = !isInString;
            buffer += char;
            continue;
        }
        
        if (isInString) {
            buffer += char;
            continue;
        }
        
        if (char === '{') depth++;
        if (char === '}') depth--;
        
        if (char === ':' && depth === 0) {
            currentKey = buffer.trim();
            buffer = '';
            continue;
        }
        
        if ((char === ',' && depth === 0) || i === str.length - 1) {
            if (i === str.length - 1) buffer += char;
            let value = buffer.trim();
            try {
                value = JSON.parse(value);
            } catch {
                // If it's not valid JSON, keep it as a string
                if (value.startsWith('{')) {
                    value = parseObject(value);
                }
            }
            result[currentKey] = value;
            currentKey = '';
            buffer = '';
            continue;
        }
        
        buffer += char;
    }
    
    return result;
}

// Initialize the structure for the updated crops
let updatedContent = cropsContent;

function extractValueFromObject(obj, path) {
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
        if (current && typeof current === 'object') {
            current = current[part];
        } else {
            return undefined;
        }
    }
    return current;
}

function cleanString(str) {
    if (typeof str === 'string') {
        // Remove quotes
        str = str.replace(/^["']|["']$/g, '');
        // Clean up weird characters
        str = str.replace(/[^\x20-\x7E]/g, '');
    }
    return str;
}

function addMissingProperties(cropObj) {
    const parseSpacing = (spacing) => {
        if (typeof spacing === 'string') {
            try {
                return JSON.parse(spacing.replace(/([{,])\s*([a-zA-Z0-9]+)\s*:/g, '$1"$2":'));
            } catch (e) {
                return { intraRows: '0cm', interRows: '0cm' };
            }
        }
        return spacing || { intraRows: '0cm', interRows: '0cm' };
    };

    const parseArray = (arr) => {
        if (typeof arr === 'string') {
            try {
                return JSON.parse(arr);
            } catch (e) {
                return [];
            }
        }
        return Array.isArray(arr) ? arr : [];
    };

    const cleanupValue = (value, defaultValue) => {
        if (value === undefined || value === null || value === '') {
            return defaultValue;
        }
        if (typeof value === 'string') {
            return cleanString(value);
        }
        return value;
    };

    const requiredDefaults = {
        name: cleanupValue(cropObj.name, "Unknown Crop"),
        image: cleanupValue(cropObj.image, "https://example.com/images/placeholder.jpg"),
        description: cleanupValue(cropObj.description, "A nutritious crop suitable for various growing conditions."),
        scientificName: cleanupValue(cropObj.scientificName, "Unknown"),
        kgPerHa: cleanupValue(cropObj.kgOfSeedRequiredPerHectare, 0),
        seedsPerKg: cleanupValue(cropObj.seedsPerKg, 0),
        spacing: parseSpacing(cropObj.plantSpacing),
        growth: {
            temperature: cleanupValue(cropObj.optimumGrowthTemperature, "0°C"),
            population: cleanupValue(extractValueFromObject(cropObj, 'population.plantsPerHa'), "0"),
            yield: cleanupValue(extractValueFromObject(cropObj, 'population.tonsPerHa'), "0"),
            period: cleanupValue(extractValueFromObject(cropObj, 'growthPeriod.daysFromPlantingToMaturity'), "0")
        },
        irrigation: {
            total: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.totalWaterRequirementPerSeason'), 0),
            firstPart: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.firstPartOfSeason'), 0),
            secondPart: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.secondPartOfSeason'), 0)
        },
        nutrients: {
            n: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.N'), 0),
            p: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.P'), 0),
            k: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.K'), 0)
        },
        leafAnalysis: {
            n: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.N'), 0),
            p: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.P'), 0),
            k: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.K'), 0)
        },
        microDeficiencies: parseArray(cropObj.sensitiveToDeficiencyOfMicroelements),
        diseases: parseArray(cropObj.importantDiseasesInNamibia),
        pests: parseArray(cropObj.importantPestsInNamibia),
        soilPH: cleanupValue(cropObj.soilPH, "6.0 to 7.0"),
        germination: {
            days: cleanupValue(extractValueFromObject(cropObj, 'germination.days'), 0),
            temperature: cleanupValue(extractValueFromObject(cropObj, 'germination.temperature'), 20)
        },
        plantingHarvestingDates: cropObj.plantingHarvestingDates || {}
    };

    return requiredDefaults;
}

// Extract the crops array and parse it
const cropArrayMatch = updatedContent.match(/export const crops: Crop\[\] = \[([\s\S]*?)\];/);
if (cropArrayMatch) {
    const cropsArrayContent = cropArrayMatch[1];
    let cropObjects = [];
    
    // Extract each crop object by matching balanced braces
    const cropStrings = [];
    let currentCrop = '';
    let braceCount = 0;
    
    for (let i = 0; i < cropsArrayContent.length; i++) {
        const char = cropsArrayContent[i];
        currentCrop += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && currentCrop.trim()) {
            cropStrings.push(currentCrop.trim().replace(/^\{|\}$/g, ''));
            currentCrop = '';
        }
    }

    // Convert each crop string into an object
    cropObjects = cropStrings.map(cropStr => {
        return addMissingProperties(parseObject(cropStr));
    });

    // Convert back to string format with proper spacing and newlines
    const formatArrays = arr => JSON.stringify(arr || [])
        .replace(/"/g, "'")
        .replace(/,/g, ", ")
        .replace(/\[/g, "[ ")
        .replace(/\]/g, " ]");
    
    const updatedCropsString = cropObjects.map((crop, index) => {
        const cropString = `  {
    name: "${crop.name}",
    scientificName: "${crop.scientificName}",
    image: "${crop.image}",
    description: "${crop.description}",
    kgPerHa: ${crop.kgPerHa || 0},
    seedsPerKg: ${crop.seedsPerKg || 0},
    spacing: {
      intraRows: "${crop.spacing?.intraRows || '0cm'}",
      interRows: "${crop.spacing?.interRows || '0cm'}"
    },
    sowingDepth: "${crop.sowingDepth || '0cm'}",
    germination: {
      days: ${crop.germination?.days || 0},
      temperature: ${crop.germination?.temperature || 20}
    },
    growth: {
      temperature: "${crop.growth?.temperature || '20°C'}",
      population: "${crop.growth?.population || '0'}",
      yield: "${crop.growth?.yield || '0'}",
      period: "${crop.growth?.period || '0'}"
    },
    rootDepth: "${crop.rootDepth || '0cm'}",
    irrigation: {
      total: ${crop.irrigation?.total || 0},
      firstPart: ${crop.irrigation?.firstPart || 0},
      secondPart: ${crop.irrigation?.secondPart || 0}
    },
    nutrients: {
      n: ${crop.nutrients?.n || 0},
      p: ${crop.nutrients?.p || 0},
      k: ${crop.nutrients?.k || 0}
    },
    leafAnalysis: {
      n: ${crop.leafAnalysis?.n || 0},
      p: ${crop.leafAnalysis?.p || 0},
      k: ${crop.leafAnalysis?.k || 0}
    },
    microDeficiencies: ${formatArrays(crop.microDeficiencies)},
    soilPH: "${crop.soilPH || '6.0 to 7.0'}",
    diseases: ${formatArrays(crop.diseases)},
    pests: ${formatArrays(crop.pests)},
    plantingHarvestingDates: ${JSON.stringify(crop.plantingHarvestingDates || {}, null, 6).replace(/^/gm, '    ')}
  }`;

        return index < cropObjects.length - 1 ? cropString + ',' : cropString;
    }).join('\n');

    // Update the file content
    updatedContent = updatedContent.replace(
        /export const crops: Crop\[\] = \[([\s\S]*?)\];/,
        `export const crops: Crop[] = [\n${updatedCropsString}\n];`
    );

    // Write the updated content back to the file
    fs.writeFileSync(cropsPath, updatedContent);
    console.log('Successfully updated crops.ts');
} else {
    console.error('Could not find crops array in the file');
}