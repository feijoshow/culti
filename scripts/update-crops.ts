import fs from 'fs';
import path from 'path';

const cropsPath = path.join(__dirname, '../lib/data/crops.ts');
const cropsContent = fs.readFileSync(cropsPath, 'utf8');

// First, let's update all germination objects
let updatedContent = cropsContent.replace(/germination: \{\s*averageDays: (\d+(?:\.\d+)?),\s*optimumAirTemperature: (\d+(?:\.\d+)?)\s*\}/g, (match, days, temp) => {
  return `germination: {
      days: ${days},
      temperature: ${temp}
    }`;
});

// Now let's add all required fields for each crop
// We'll use the original data for defaults
const defaultCropData = {
  name: '',
  image: '',
  description: '',
  kgPerHa: 0,
  spacing: {
    intraRows: '',
    interRows: ''
  },
  growth: {
    temperature: '',
    population: '',
    yield: '',
    period: ''
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
  microDeficiencies: [],
  diseases: [],
  pests: []
};

// Extract the crops array
const cropMatch = updatedContent.match(/export const crops: Crop\[\] = \[\s*{([^}]+)}/);
if (cropMatch) {
  const cropData = cropMatch[1];
  // Add required fields
  const updatedCropData = `{
    name: "Beetroot",
    image: "https://example.com/images/beetroot.jpg",
    description: "A root vegetable known for its deep red color and earthy flavor",
    kgPerHa: 8.5,${cropData}`;
  
  updatedContent = updatedContent.replace(/export const crops: Crop\[\] = \[\s*{([^}]+)}/, `export const crops: Crop[] = [${updatedCropData}`);
}

fs.writeFileSync(cropsPath, updatedContent);
console.log('Successfully updated crops.ts');