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

    // Get existing values or use defaults
    const spacing = parseSpacing(cropObj.plantSpacing || cropObj.spacing);
    const nutrients = cropObj.nutrients || {
        n: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.N'), 0),
        p: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.P'), 0),
        k: cleanupValue(extractValueFromObject(cropObj, 'macroElements.kgPerHectare.K'), 0)
    };
    const leafAnalysis = cropObj.leafAnalysis || {
        n: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.N'), 0),
        p: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.P'), 0),
        k: cleanupValue(extractValueFromObject(cropObj, 'macroElements.leafTestNorms.K'), 0)
    };
    const growth = cropObj.growth || {
        temperature: cleanupValue(cropObj.optimumGrowthTemperature, "20°C"),
        population: cleanupValue(extractValueFromObject(cropObj, 'population.plantsPerHa'), "0"),
        yield: cleanupValue(extractValueFromObject(cropObj, 'population.tonsPerHa'), "0"),
        period: cleanupValue(extractValueFromObject(cropObj, 'growthPeriod.daysFromPlantingToMaturity'), "0")
    };
    const irrigation = cropObj.irrigation || {
        total: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.totalWaterRequirementPerSeason'), 0),
        firstPart: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.firstPartOfSeason'), 0),
        secondPart: cleanupValue(extractValueFromObject(cropObj, 'irrigationWaterRequirement.secondPartOfSeason'), 0)
    };
    const germination = cropObj.germination || {
        days: cleanupValue(extractValueFromObject(cropObj, 'germination.days'), 7),
        temperature: cleanupValue(extractValueFromObject(cropObj, 'germination.temperature'), 20)
    };

    // Create the updated crop object with all required fields
    const updatedCrop = {
        // Common fields
        name: cleanupValue(cropObj.name, "Unknown Crop"),
        scientificName: cleanupValue(cropObj.scientificName, "Unknown"),
        image: cleanupValue(cropObj.image, "https://example.com/images/placeholder.jpg"),
        description: cleanupValue(cropObj.description, "A nutritious crop suitable for various growing conditions."),
        seedsPerKg: cleanupValue(cropObj.seedsPerKg, 0),
        
        // Required fields from the Crop interface
        kgPerHa: cleanupValue(cropObj.kgPerHa || cropObj.kgOfSeedRequiredPerHectare, 0),
        spacing,
        sowingDepth: cleanupValue(cropObj.sowingDepth, "2-3cm"),
        germination,
        growth,
        rootDepth: cleanupValue(cropObj.rootDepth, "30-60cm"),
        irrigation,
        nutrients,
        leafAnalysis,
        microDeficiencies: parseArray(cropObj.microDeficiencies || cropObj.sensitiveToDeficiencyOfMicroelements),
        soilPH: cleanupValue(cropObj.soilPH, "6.0 to 7.0"),
        diseases: parseArray(cropObj.diseases || cropObj.importantDiseasesInNamibia),
        pests: parseArray(cropObj.pests || cropObj.importantPestsInNamibia),

        // Optional lib-specific fields
        kgOfSeedRequiredPerHectare: cleanupValue(cropObj.kgOfSeedRequiredPerHectare, 0),
        rangeNumber: cleanupValue(cropObj.rangeNumber, 0),
        directPlanting: cleanupValue(cropObj.directPlanting, "Yes"),
        numberOfTransplantsPerHectare: cleanupValue(cropObj.numberOfTransplantsPerHectare, "0"),
        plantingHarvestingDates: cropObj.plantingHarvestingDates || {}
    };

    return updatedCrop;
}

// Extract the crops array and parse it
const cropArrayMatch = cropsContent.match(/export const crops: Crop\[\] = \[([\s\S]*?)\];/);
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
    seedsPerKg: ${crop.seedsPerKg},
    kgPerHa: ${crop.kgPerHa},
    spacing: {
      intraRows: "${crop.spacing.intraRows}",
      interRows: "${crop.spacing.interRows}"
    },
    sowingDepth: "${crop.sowingDepth}",
    germination: {
      days: ${crop.germination.days},
      temperature: ${crop.germination.temperature}
    },
    growth: {
      temperature: "${crop.growth.temperature}",
      population: "${crop.growth.population}",
      yield: "${crop.growth.yield}",
      period: "${crop.growth.period}"
    },
    rootDepth: "${crop.rootDepth}",
    irrigation: {
      total: ${crop.irrigation.total},
      firstPart: ${crop.irrigation.firstPart},
      secondPart: ${crop.irrigation.secondPart}
    },
    nutrients: {
      n: ${crop.nutrients.n},
      p: ${crop.nutrients.p},
      k: ${crop.nutrients.k}
    },
    leafAnalysis: {
      n: ${crop.leafAnalysis.n},
      p: ${crop.leafAnalysis.p},
      k: ${crop.leafAnalysis.k}
    },
    microDeficiencies: ${formatArrays(crop.microDeficiencies)},
    soilPH: "${crop.soilPH}",
    diseases: ${formatArrays(crop.diseases)},
    pests: ${formatArrays(crop.pests)},
    plantingHarvestingDates: ${JSON.stringify(crop.plantingHarvestingDates || {}, null, 6).replace(/^/gm, '    ')}
  }`;

        return index < cropObjects.length - 1 ? cropString + ',' : cropString;
    }).join('\n');

    // Update the file content
    const updatedContent = `export const crops: Crop[] = [\n${updatedCropsString}\n];`;
    
    // Write the updated content back to the file
    fs.writeFileSync(cropsPath, updatedContent);
    console.log('Successfully updated crops.ts');
} else {
    console.error('Could not find crops array in the file');
}