// data/types.ts
export interface Crop {
  scientificName: string;
  rangeNumber: number;
  seedsPerKg: number;
  kgOfSeedRequiredPerHectare: number;
  directPlanting: string;
  numberOfTransplantsPerHectare: number | string;
  numberOfTubersOrCuttingsPerHectare: number | string;
  sowingDepth: string;
  plantSpacing: {
    intraRows: string;
    interRows: string;
  };
  germination: {
    averageDays: number;
    optimumAirTemperature: number;
  };
  optimumGrowthTemperature: string;
  population: {
    plantsPerHa: string;
    tonsPerHa: string;
  };
  growthPeriod: {
    daysFromPlantingToMaturity: string;
    harvestTime: string;
  };
  rootDepth: string;
  irrigationWaterRequirement: {
    totalWaterRequirementPerSeason: number;
    firstPartOfSeason: number;
    secondPartOfSeason: number;
  };
  macroElements: {
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
  sensitiveToDeficiencyOfMicroelements: string[];
  soilPH: string;
  importantDiseasesInNamibia: string[];
  importantPestsInNamibia: string[];
  plantingHarvestingDates: {
    [region: string]: {
      planting: string;
      harvesting: string;
    };
  };
}

export interface Region {
  name: string;
  plantingHarvestingDates: {
    [cropName: string]: {
      planting: string;
      harvesting: string;
    };
  };
}

export interface Disease {
  name: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
  affectedCrops: string[];
}

export interface WeatherData {
  temperature: {
    min: number;
    max: number;
  };
  rainfall: number;
  humidity: number;
  windSpeed: number;
  forecast: {
    [date: string]: {
      temperature: {
        min: number;
        max: number;
      };
      rainfall: number;
      humidity: number;
      windSpeed: number;
      condition: string;
    };
  };
}