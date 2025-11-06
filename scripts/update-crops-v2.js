const fs = require('fs');
const path = require('path');

const cropsPath = path.join(__dirname, '../lib/data/crops.ts');
const cropsContent = fs.readFileSync(cropsPath, 'utf8');

// Format arrays for TypeScript output
function formatArray(arr) {
    if (!Array.isArray(arr)) return '[]';
    return `[ ${arr.map(item => `'${item}'`).join(', ')} ]`;
}

// Helper to ensure string values are safe
function safeString(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/"/g, '\\"').trim();
}

// Helper to ensure number values are safe
function safeNumber(num) {
    const n = Number(num);
    return isNaN(n) ? 0 : n;
}

// Extract the crops array
const cropsMatch = cropsContent.match(/export const crops: Crop\[\] = \[([\s\S]*?)\];/);

if (cropsMatch) {
    // Split into individual crops while preserving object structure
    const cropsContent = cropsMatch[1];
    let crops = [];
    let currentCrop = '';
    let braceCount = 0;
    
    // Parse crops array carefully
    for (let i = 0; i < cropsContent.length; i++) {
        const char = cropsContent[i];
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        currentCrop += char;
        
        if (braceCount === 0 && currentCrop.trim()) {
            crops.push(currentCrop.trim());
            currentCrop = '';
        }
    }

    // Process each crop
    const processedCrops = crops
        .map(cropStr => {
            // Extract existing values
            const nameMatch = cropStr.match(/name:\s*["']([^"']+)["']/);
            const scientificNameMatch = cropStr.match(/scientificName:\s*["']([^"']+)["']/);
            const kgPerHaMatch = cropStr.match(/kgOfSeedRequiredPerHectare:\s*([\d.]+)/);
            const spacingMatch = cropStr.match(/plantSpacing:\s*({[^}]+})/);
            const germinationMatch = cropStr.match(/germination:\s*({[^}]+})/);
            const populationMatch = cropStr.match(/population:\s*({[^}]+})/);
            const irrigationMatch = cropStr.match(/irrigationWaterRequirement:\s*({[^}]+})/);
            const macroElementsMatch = cropStr.match(/macroElements:\s*({[^}]+})/);
            const microDeficienciesMatch = cropStr.match(/sensitiveToDeficiencyOfMicroelements:\s*(\[[^\]]+\])/);
            const diseasesMatch = cropStr.match(/importantDiseasesInNamibia:\s*(\[[^\]]+\])/);
            const pestsMatch = cropStr.match(/importantPestsInNamibia:\s*(\[[^\]]+\])/);
            const soilPHMatch = cropStr.match(/soilPH:\s*["']([^"']+)["']/);
            
            // Parse spacing
            let spacing = { intraRows: '0cm', interRows: '0cm' };
            if (spacingMatch) {
                const intraMatch = spacingMatch[1].match(/intraRows:\s*["']([^"']+)["']/);
                const interMatch = spacingMatch[1].match(/interRows:\s*["']([^"']+)["']/);
                if (intraMatch) spacing.intraRows = intraMatch[1];
                if (interMatch) spacing.interRows = interMatch[1];
            }

            // Parse germination
            let germination = { days: 0, temperature: 20 };
            if (germinationMatch) {
                const daysMatch = germinationMatch[1].match(/days:\s*([\d.]+)/);
                const tempMatch = germinationMatch[1].match(/temperature:\s*([\d.]+)/);
                if (daysMatch) germination.days = parseFloat(daysMatch[1]);
                if (tempMatch) germination.temperature = parseFloat(tempMatch[1]);
            }

            // Parse arrays
            const parseMicroDeficiencies = microDeficienciesMatch ? 
                microDeficienciesMatch[1].replace(/[\[\]'"\s]/g, '').split(',') : [];
            const parseDiseases = diseasesMatch ? 
                diseasesMatch[1].replace(/[\[\]'"\s]/g, '').split(',') : [];
            const parsePests = pestsMatch ? 
                pestsMatch[1].replace(/[\[\]'"\s]/g, '').split(',') : [];

            // Return formatted crop object
            return {
                name: safeString(nameMatch ? nameMatch[1] : ''),
                scientificName: safeString(scientificNameMatch ? scientificNameMatch[1] : ''),
                image: `https://example.com/images/${safeString(nameMatch ? nameMatch[1].toLowerCase().replace(/\s+/g, '-') : 'unknown')}.jpg`,
                description: `A nutritious crop suitable for various growing conditions.`,
                kgPerHa: safeNumber(kgPerHaMatch ? kgPerHaMatch[1] : 0),
                spacing,
                germination,
                growth: {
                    temperature: '20°C',
                    population: '0',
                    yield: '0',
                    period: '0'
                },
                irrigation: {
                    total: 0,
                    firstPart: 0,
                    secondPart: 0
                },
                nutrients: {
                    n: 0,
                    p: 0,
                    k: 0
                },
                leafAnalysis: {
                    n: 0,
                    p: 0,
                    k: 0
                },
                microDeficiencies: parseMicroDeficiencies,
                soilPH: safeString(soilPHMatch ? soilPHMatch[1] : '6.0 to 7.0'),
                diseases: parseDiseases,
                pests: parsePests
            };
        });

    // Generate the output
    const output = processedCrops.map((crop, index) => {
        return `  {
    name: "${crop.name}",
    scientificName: "${crop.scientificName}",
    image: "${crop.image}",
    description: "${crop.description}",
    kgPerHa: ${crop.kgPerHa},
    seedsPerKg: ${crop.seedsPerKg || 0},
    spacing: {
      intraRows: "${crop.spacing.intraRows}",
      interRows: "${crop.spacing.interRows}"
    },
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
    microDeficiencies: ${formatArray(crop.microDeficiencies)},
    soilPH: "${crop.soilPH}",
    diseases: ${formatArray(crop.diseases)},
    pests: ${formatArray(crop.pests)}${index < processedCrops.length - 1 ? ',' : ''}
  }`;
    }).join('\n');

    // Write the final output
    const finalContent = `// data/crops.ts
import { Crop } from './types/crop';

export const crops: Crop[] = [\n${output}\n];

export const getCropByName = (name: string): Crop | undefined => {
  return crops.find(crop => 
    crop.scientificName.toLowerCase().includes(name.toLowerCase()) ||
    getCommonName(crop.scientificName).toLowerCase().includes(name.toLowerCase())
  );
};

export const getCommonName = (scientificName: string): string => {
  const nameMap: { [key: string]: string } = {
    "Beta vulgaris var. conditiva": "Beetroot",
    "Brassica oleracea var cymosa": "Broccoli",
    "Brassica oleracea var. capitata": "Cabbage",
    "Daucus carota": "Carrot",
    "Cucumis sativus": "English Cucumber",
    "Cucurbita pepo": "Gem Squash",
    "Lactuca sativa": "Lettuce",
    "Allium cepa": "Onion",
    "Capsicum spp": "Pepper (Sweet)",
    "Solanum Tuberosum": "Potato",
    "Cucurbita maxima": "Pumpkins",
    "Cucurbita pepo (moschata)": "Squash (Butternuts)",
    "Zea mays var. saccharata": "Sweetcorn",
    "Cucumis melo": "Sweet Melon",
    "Ipomoea batatas": "Sweet Potato",
    "Beta vulgaris var. cicla": "Swiss Chard (Spinach)",
    "Lycopersicon esculentum": "Tomato - Open field (Indeterminate)",
    "Citrullus lanatus": "Watermelons"
  };
  
  return nameMap[scientificName] || scientificName;
};`;

    fs.writeFileSync(cropsPath, finalContent);
    console.log('Successfully updated crops.ts');
} else {
    console.error('Could not find crops array in the file');
}