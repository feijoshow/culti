// data/utils.ts
import { crops } from './crops';
import { diseases } from './diseases';
import { Crop, Disease } from './types';

export const getCropsByRegion = (region: string): Crop[] => {
  return crops.filter(crop => 
    crop.plantingHarvestingDates[region] !== undefined
  );
};

export const getCropsForCurrentMonth = (region: string): Crop[] => {
  const currentMonth = new Date().getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  return crops.filter(crop => {
    const dates = crop.plantingHarvestingDates[region];
    if (!dates) return false;
    
    // Check if current month is in planting period
    const plantingMonths = dates.planting;
    if (plantingMonths.includes(monthNames[currentMonth])) return true;
    
    // Check if current month is in harvesting period
    const harvestingMonths = dates.harvesting;
    if (harvestingMonths.includes(monthNames[currentMonth])) return true;
    
    return false;
  });
};

export const getDiseasesByCrop = (cropName: string): Disease[] => {
  return diseases.filter(disease => 
    disease.affectedCrops.includes(cropName)
  );
};

export const calculateSeedRequirement = (cropName: string, fieldSize: number): number => {
  const crop = crops.find(c => getCommonName(c.scientificName) === cropName);
  if (!crop) return 0;
  
  // fieldSize is in square meters, convert to hectares
  const fieldSizeInHa = fieldSize / 10000;
  return crop.kgOfSeedRequiredPerHectare * fieldSizeInHa;
};

export const calculateFertilizerRequirement = (cropName: string, fieldSize: number, nutrient: 'N' | 'P' | 'K'): number => {
  const crop = crops.find(c => getCommonName(c.scientificName) === cropName);
  if (!crop) return 0;
  
  // fieldSize is in square meters, convert to hectares
  const fieldSizeInHa = fieldSize / 10000;
  return crop.macroElements.kgPerHectare[nutrient] * fieldSizeInHa;
};

export const calculateIrrigationRequirement = (cropName: string, fieldSize: number): number => {
  const crop = crops.find(c => getCommonName(c.scientificName) === cropName);
  if (!crop) return 0;
  
  // fieldSize is in square meters, convert to hectares
  const fieldSizeInHa = fieldSize / 10000;
  return crop.irrigationWaterRequirement.totalWaterRequirementPerSeason * fieldSizeInHa;
};

export const calculateYieldEstimate = (cropName: string, fieldSize: number): { min: number, max: number } => {
  const crop = crops.find(c => getCommonName(c.scientificName) === cropName);
  if (!crop) return { min: 0, max: 0 };
  
  // fieldSize is in square meters, convert to hectares
  const fieldSizeInHa = fieldSize / 10000;
  
  // Extract min and max yield from the string
  const yieldRange = crop.population.tonsPerHa;
  const [minYield, maxYield] = yieldRange.split(' - ').map(y => parseFloat(y.replace(/[^\d.-]/g, '')));
  
  return {
    min: minYield * fieldSizeInHa,
    max: maxYield * fieldSizeInHa
  };
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
};

export const getScientificName = (commonName: string): string => {
  const nameMap: { [key: string]: string } = {
    "Beetroot": "Beta vulgaris var. conditiva",
    "Broccoli": "Brassica oleracea var cymosa",
    "Cabbage": "Brassica oleracea var. capitata",
    "Carrot": "Daucus carota",
    "English Cucumber": "Cucumis sativus",
    "Gem Squash": "Cucurbita pepo",
    "Lettuce": "Lactuca sativa",
    "Onion": "Allium cepa",
    "Pepper (Sweet)": "Capsicum spp",
    "Potato": "Solanum Tuberosum",
    "Pumpkins": "Cucurbita maxima",
    "Squash (Butternuts)": "Cucurbita pepo (moschata)",
    "Sweetcorn": "Zea mays var. saccharata",
    "Sweet Melon": "Cucumis melo",
    "Sweet Potato": "Ipomoea batatas",
    "Swiss Chard (Spinach)": "Beta vulgaris var. cicla",
    "Tomato - Open field (Indeterminate)": "Lycopersicon esculentum",
    "Watermelons": "Citrullus lanatus"
  };
  
  return nameMap[commonName] || commonName;
};