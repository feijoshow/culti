export interface CropGrowth {
  temperature: string;
  population: string;
  yield: string;
  period: string;
}

export interface CropNutrients {
  n: number;
  p: number;
  k: number;
}

export interface CropIrrigation {
  total: number;
  firstPart: number;
  secondPart: number;
}

export interface CropSpacing {
  intraRows: string;
  interRows: string;
}

export interface CropGermination {
  temperature: number;
  days: number;
}

export interface Crop {
  // Common fields used in both app and lib
  scientificName: string;
  seedsPerKg: number;
  
  // App-specific fields
  name: string; 
  image: string;
  description: string;
  kgPerHa: number;
  spacing: CropSpacing;
  sowingDepth: string;
  germination: CropGermination;
  growth: CropGrowth;
  rootDepth: string | number;
  irrigation: CropIrrigation;
  nutrients: CropNutrients;
  leafAnalysis: CropNutrients;
  microDeficiencies: string[];
  soilPH: string;
  diseases: string[];
  pests: string[];
  
  // Lib-specific fields
  kgOfSeedRequiredPerHectare?: number;
  rangeNumber?: number;
  directPlanting?: string;
  numberOfTransplantsPerHectare?: number | string;
  numberOfTubersOrCuttingsPerHectare?: number | string;
  plantSpacing?: CropSpacing;
  optimumGrowthTemperature?: string;
  population?: {
    plantsPerHa: string;
    tonsPerHa: string;
  };
  growthPeriod?: {
    daysFromPlantingToMaturity: string;
    harvestTime: string;
  };
  irrigationWaterRequirement?: {
    totalWaterRequirementPerSeason: number;
    firstPartOfSeason: number;
    secondPartOfSeason: number;
  };
  macroElements?: {
    kgPerHectare: {
      N: number;
      P: number;
      K: number;
    };
    leafTestNorms: {
      N: number;
      P: number;
      K: number;
    };
  };
  sensitiveToDeficiencyOfMicroelements?: string[];
  importantDiseasesInNamibia?: string[];
  importantPestsInNamibia?: string[];
  plantingHarvestingDates?: {
    [region: string]: {
      planting: string;
      harvesting: string;
    };
  };
}