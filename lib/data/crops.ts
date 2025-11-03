// data/crops.ts
import { Crop } from './types';

export const crops: Crop[] = [
  {
    scientificName: "Beta vulgaris var. conditiva",
    rangeNumber: 50000,
    seedsPerKg: 50000,
    kgOfSeedRequiredPerHectare: 8.5,
    directPlanting: "7-10kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "1.5 -2.5cm",
    plantSpacing: {
      intraRows: "5 - 10cm",
      interRows: "30 - 40cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "17 - 20°C",
    population: {
      plantsPerHa: "330 000 - 500 000",
      tonsPerHa: "25 - 40"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "65 - 85 days",
      harvestTime: "30 days"
    },
    rootDepth: "45 - 60 cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 340,
      firstPartOfSeason: 20,
      secondPartOfSeason: 40
    },
    macroElements: {
      kgPerHectare: {
        N: 116,
        P: 20,
        K: 276
      },
      leafTestNorms: {
        N: 4,
        P: 0.35,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Cu", "Mo", "Mg", "B"],
    soilPH: "6 to 8",
    importantDiseasesInNamibia: ["Leaf Spot", "Beet Curly Top", "downy Mildew", "Rhizomania"],
    importantPestsInNamibia: ["Nematodes", "Cutworms", "Caterpillars"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "January to April",
        harvesting: "April to July"
      },
      "Karst Production Zone": {
        planting: "January to September",
        harvesting: "January to November"
      },
      "Kavango Production Zone": {
        planting: "January to Sept",
        harvesting: "March to November"
      },
      "North Central Production Zone": {
        planting: "October to May",
        harvesting: "May/June"
      },
      "Orange River Production Zone": {
        planting: "February",
        harvesting: "May"
      },
      "South Production Zone": {
        planting: "January to September",
        harvesting: "March to November"
      },
      "Zambezi Production Zone": {
        planting: "January to September",
        harvesting: "March to November"
      }
    }
  },
  {
    scientificName: "Brassica oleracea var cymosa",
    rangeNumber: 220000,
    seedsPerKg: 220000,
    kgOfSeedRequiredPerHectare: 1.25,
    directPlanting: "1-1.5kg/ha",
    numberOfTransplantsPerHectare: 45000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "1 - 1.5cm",
    plantSpacing: {
      intraRows: "25 - 50cm",
      interRows: "45 -60cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "15 - 20°C",
    population: {
      plantsPerHa: "40 000 - 50 000",
      tonsPerHa: "8 - 15"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "65 - 120 days",
      harvestTime: "14 days"
    },
    rootDepth: "45 - 60 cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 440,
      firstPartOfSeason: 30,
      secondPartOfSeason: 38
    },
    macroElements: {
      kgPerHectare: {
        N: 128,
        P: 26,
        K: 138
      },
      leafTestNorms: {
        N: 4.8,
        P: 1,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Fe", "Mo"],
    soilPH: "6 to 6.8",
    importantDiseasesInNamibia: ["White Rust", "Powdery Mildew", "Downy Mildew", "Bacteria Leaf Spot", "Black Rot"],
    importantPestsInNamibia: ["Diamond Black Moth", "Aphids"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Karst Production Zone": {
        planting: "N/A",
        harvesting: "N/A"
      },
      "Kavango Production Zone": {
        planting: "February to Oct",
        harvesting: "May to January"
      },
      "North Central Production Zone": {
        planting: "April to June",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "February to July",
        harvesting: "April to September"
      },
      "South Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Zambezi Production Zone": {
        planting: "February to Oct",
        harvesting: "May to January"
      }
    }
  },
  {
    scientificName: "Brassica oleracea var. capitata",
    rangeNumber: 280000,
    seedsPerKg: 280000,
    kgOfSeedRequiredPerHectare: 3,
    directPlanting: "2 - 4kg/ha",
    numberOfTransplantsPerHectare: 40000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "1 - 1.5cm",
    plantSpacing: {
      intraRows: "40 - 50cm",
      interRows: "50cm"
    },
    germination: {
      averageDays: 5.5,
      optimumAirTemperature: 18.5
    },
    optimumGrowthTemperature: "15 - 20°C",
    population: {
      plantsPerHa: "40 000 - 50 000",
      tonsPerHa: "60 - 110"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "90 - 145 days",
      harvestTime: "Once"
    },
    rootDepth: "30 - 45cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 500,
      firstPartOfSeason: 22.5,
      secondPartOfSeason: 32.5
    },
    macroElements: {
      kgPerHectare: {
        N: 374,
        P: 66,
        K: 396
      },
      leafTestNorms: {
        N: 3.4,
        P: 0.5,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["S", "Ca", "Mg", "B", "Mo"],
    soilPH: "5 to 7.5",
    importantDiseasesInNamibia: ["Black Rot", "Downy Mildew", "Bacterial Spot", "Soft Rot"],
    importantPestsInNamibia: ["Aphids", "Bagradabugs", "Diamond-back Moth Larvae", "African Bollworm"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Karst Production Zone": {
        planting: "January to October",
        harvesting: "April to December"
      },
      "Kavango Production Zone": {
        planting: "February to July",
        harvesting: "April to September"
      },
      "North Central Production Zone": {
        planting: "April to June",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "February to September",
        harvesting: "April to November"
      },
      "South Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Zambezi Production Zone": {
        planting: "February to July",
        harvesting: "April to September"
      }
    }
  },
  {
    scientificName: "Daucus carota",
    rangeNumber: 400000,
    seedsPerKg: 400000,
    kgOfSeedRequiredPerHectare: 5.5,
    directPlanting: "5.5kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "1 - 1.5cm",
    plantSpacing: {
      intraRows: "3 - 8cm",
      interRows: "20 - 30cm"
    },
    germination: {
      averageDays: 6,
      optimumAirTemperature: 25
    },
    optimumGrowthTemperature: "15 - 20°C",
    population: {
      plantsPerHa: "1 500 000 - 2 500 000",
      tonsPerHa: "25 - 50"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "70 - 120 days",
      harvestTime: "90 - 120 days"
    },
    rootDepth: "30 - 40cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 200,
      firstPartOfSeason: 40,
      secondPartOfSeason: 30
    },
    macroElements: {
      kgPerHectare: {
        N: 200,
        P: 38,
        K: 240
      },
      leafTestNorms: {
        N: 3,
        P: 0.35,
        K: 6
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Cu", "Mn", "Mg", "B", "Ca"],
    soilPH: "6 to 7",
    importantDiseasesInNamibia: ["Leaf Bright", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Flea Beetles", "Root-knot-nematodes"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "Feb/Mar",
        harvesting: "May/June"
      },
      "Karst Production Zone": {
        planting: "N/A",
        harvesting: "N/A"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "January to May",
        harvesting: "March to July"
      },
      "Orange River Production Zone": {
        planting: "March to April",
        harvesting: "August to October"
      },
      "South Production Zone": {
        planting: "January to April",
        harvesting: "June to September"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Cucumis sativus",
    rangeNumber: 35000,
    seedsPerKg: 35000,
    kgOfSeedRequiredPerHectare: 3,
    directPlanting: "3kg/ha",
    numberOfTransplantsPerHectare: 18600,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "3cm",
    plantSpacing: {
      intraRows: "60cm",
      interRows: "90cm"
    },
    germination: {
      averageDays: 4,
      optimumAirTemperature: 25
    },
    optimumGrowthTemperature: "21 - 24°C",
    population: {
      plantsPerHa: "10 000 - 13 000",
      tonsPerHa: "30 (open field), 120 -300 (greenhouse)"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "60 days",
      harvestTime: "21 days"
    },
    rootDepth: "N/A",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 420,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 183,
        P: 34,
        K: 207
      },
      leafTestNorms: {
        N: 4,
        P: 0.44,
        K: 3
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Cu", "S", "Ca", "Mg"],
    soilPH: "5.5 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Karst Production Zone": {
        planting: "August to February",
        harvesting: "October to May"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Orange River Production Zone": {
        planting: "August to February",
        harvesting: "October to May"
      },
      "South Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Cucurbita pepo",
    rangeNumber: 8000,
    seedsPerKg: 8000,
    kgOfSeedRequiredPerHectare: 1.75,
    directPlanting: "1.5 - 2kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2 -3 cm",
    plantSpacing: {
      intraRows: "50 - 70cm",
      interRows: "120 - 150cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 22
    },
    optimumGrowthTemperature: "20 - 24°C",
    population: {
      plantsPerHa: "10 000 - 17 000",
      tonsPerHa: "50"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "50 days",
      harvestTime: "21 days"
    },
    rootDepth: "90cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 420,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 213,
        P: 13,
        K: 166
      },
      leafTestNorms: {
        N: 3.3,
        P: 0.65,
        K: 3
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Mo"],
    soilPH: "5.5 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & November/December"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "June/July & October/November",
        harvesting: "September to December"
      },
      "Orange River Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & October/November"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Lactuca sativa",
    rangeNumber: 88000,
    seedsPerKg: 88000,
    kgOfSeedRequiredPerHectare: 2.5,
    directPlanting: "2-3kg/ha",
    numberOfTransplantsPerHectare: 80000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2mm (0.2cm)",
    plantSpacing: {
      intraRows: "30cm",
      interRows: "30cm"
    },
    germination: {
      averageDays: 4,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "15 - 20°C",
    population: {
      plantsPerHa: "80 000",
      tonsPerHa: "25 - 40"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "90 days",
      harvestTime: "21 days"
    },
    rootDepth: "45 - 60cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 340,
      firstPartOfSeason: 25,
      secondPartOfSeason: 30
    },
    macroElements: {
      kgPerHectare: {
        N: 108,
        P: 14,
        K: 194
      },
      leafTestNorms: {
        N: 3.4,
        P: 0.5,
        K: 3
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Cu", "Mo"],
    soilPH: "4.8 - 8",
    importantDiseasesInNamibia: ["Thrips", "Mildew", "Anthracnose"],
    importantPestsInNamibia: ["Cutworm", "Thrips", "Whitefly", "Leaf Miner"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Karst Production Zone": {
        planting: "August to February",
        harvesting: "October to May"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Orange River Production Zone": {
        planting: "August to February",
        harvesting: "October to May"
      },
      "South Production Zone": {
        planting: "Year round",
        harvesting: "Year round"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Allium cepa",
    rangeNumber: 280000,
    seedsPerKg: 280000,
    kgOfSeedRequiredPerHectare: 4.25,
    directPlanting: "4 - 4.5kg/ha",
    numberOfTransplantsPerHectare: 800000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "1 - 1.5cm",
    plantSpacing: {
      intraRows: "8 - 10cm",
      interRows: "30 - 45cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "12 - 24°C",
    population: {
      plantsPerHa: "500 000 - 800 000",
      tonsPerHa: "168"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "168 days",
      harvestTime: "Once"
    },
    rootDepth: "45 - 60cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 600,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 114,
        P: 25,
        K: 155
      },
      leafTestNorms: {
        N: 3,
        P: 0.3,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Mg", "Cu", "Zn"],
    soilPH: "6 to 6.8",
    importantDiseasesInNamibia: ["Pink Rot", "Neck Rot", "Powdery Mildew"],
    importantPestsInNamibia: ["Onion Thrips"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Karst Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "December to August"
      },
      "North Central Production Zone": {
        planting: "July to March",
        harvesting: "October to June"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "South Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "December to August"
      }
    }
  },
  {
    scientificName: "Capsicum spp",
    rangeNumber: 150000,
    seedsPerKg: 150000,
    kgOfSeedRequiredPerHectare: 1,
    directPlanting: "1kg/ha",
    numberOfTransplantsPerHectare: 40000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "0.6 - 1.3cm",
    plantSpacing: {
      intraRows: "40 - 45cm",
      interRows: "45 - 75cm"
    },
    germination: {
      averageDays: 10,
      optimumAirTemperature: 29
    },
    optimumGrowthTemperature: "20 - 30°C",
    population: {
      plantsPerHa: "20 000 - 55 000",
      tonsPerHa: "84 - 112"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "84 - 112 days",
      harvestTime: "45 days"
    },
    rootDepth: "70cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 600,
      firstPartOfSeason: 25,
      secondPartOfSeason: 25
    },
    macroElements: {
      kgPerHectare: {
        N: 249,
        P: 22,
        K: 249
      },
      leafTestNorms: {
        N: 3.75,
        P: 0.45,
        K: 6
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Ca"],
    soilPH: "6 to 7",
    importantDiseasesInNamibia: ["Bacteria Spot", "Fussarium Wilt"],
    importantPestsInNamibia: ["Aphids", "Thrips", "American Leaf Miner"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "Karst Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "July to March",
        harvesting: "October to June"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "South Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Solanum Tuberosum",
    rangeNumber: 0,
    seedsPerKg: 0,
    kgOfSeedRequiredPerHectare: 2500,
    directPlanting: "N/A",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: 45000,
    sowingDepth: "8 - 20 cm",
    plantSpacing: {
      intraRows: "20 - 35cm",
      interRows: "75 - 90cm"
    },
    germination: {
      averageDays: 10,
      optimumAirTemperature: 25
    },
    optimumGrowthTemperature: "12 - 23°C",
    population: {
      plantsPerHa: "32 000 -45 000",
      tonsPerHa: "90 - 120"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "90 - 120 days",
      harvestTime: "Once"
    },
    rootDepth: "60cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 500,
      firstPartOfSeason: 18.5,
      secondPartOfSeason: 32.5
    },
    macroElements: {
      kgPerHectare: {
        N: 161,
        P: 37,
        K: 236
      },
      leafTestNorms: {
        N: 0,
        P: 0,
        K: 0
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Mg", "Mo", "B", "Zn", "Cu"],
    soilPH: "5 to 6.5",
    importantDiseasesInNamibia: ["Early Bright", "Late Bright", "Rhizictonia Rot", "Common Scab", "Mosaic Potato Virus", "Potato Leaf Roll Virus", "Bacteria Wilt"],
    importantPestsInNamibia: ["American Potato Tuber Moth", "Leaf Miner", "Nematodes", "Tuta Absoluta"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "January to July"
      },
      "Karst Production Zone": {
        planting: "May to June",
        harvesting: "November/December"
      },
      "Kavango Production Zone": {
        planting: "July to March",
        harvesting: "Year round"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "May to June",
        harvesting: "November/December"
      },
      "South Production Zone": {
        planting: "August to January",
        harvesting: "January to July"
      },
      "Zambezi Production Zone": {
        planting: "July to March",
        harvesting: "Year round"
      }
    }
  },
  {
    scientificName: "Cucurbita maxima",
    rangeNumber: 4000,
    seedsPerKg: 4000,
    kgOfSeedRequiredPerHectare: 2,
    directPlanting: "2kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "3 -5 cm",
    plantSpacing: {
      intraRows: "50 -90cm",
      interRows: "150 - 200cm"
    },
    germination: {
      averageDays: 10,
      optimumAirTemperature: 32
    },
    optimumGrowthTemperature: "20 - 24°C",
    population: {
      plantsPerHa: "4000 - 10 000",
      tonsPerHa: "110 - 170"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "110 - 170 days",
      harvestTime: "30 - 40 days"
    },
    rootDepth: "90cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 420,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 183,
        P: 36,
        K: 204
      },
      leafTestNorms: {
        N: 2.2,
        P: 0.55,
        K: 3
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Mo"],
    soilPH: "5.5 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew", "Downy Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & October/November"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "June to September",
        harvesting: "September to December"
      },
      "Orange River Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & October/November"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Cucurbita pepo (moschata)",
    rangeNumber: 9000,
    seedsPerKg: 9000,
    kgOfSeedRequiredPerHectare: 1.75,
    directPlanting: "1.5 - 2kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2 - 3 cm",
    plantSpacing: {
      intraRows: "50 -70cm",
      interRows: "150 - 200cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 22
    },
    optimumGrowthTemperature: "20 - 24°C",
    population: {
      plantsPerHa: "10 000",
      tonsPerHa: "85 - 110"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "85 - 110 days",
      harvestTime: "21 days"
    },
    rootDepth: "90cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 350,
      firstPartOfSeason: 25,
      secondPartOfSeason: 40
    },
    macroElements: {
      kgPerHectare: {
        N: 355,
        P: 22,
        K: 277
      },
      leafTestNorms: {
        N: 3.3,
        P: 0.65,
        K: 3
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Mo"],
    soilPH: "5.5 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & November/December"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "December to August"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & November/December"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "December to August"
      }
    }
  },
  {
    scientificName: "Zea mays var. saccharata",
    rangeNumber: 7000,
    seedsPerKg: 7000,
    kgOfSeedRequiredPerHectare: 9,
    directPlanting: "8 - 10kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2 - 2.5cm",
    plantSpacing: {
      intraRows: "10 - 20cm",
      interRows: "45 - 120cm"
    },
    germination: {
      averageDays: 7,
      optimumAirTemperature: 30
    },
    optimumGrowthTemperature: "20 - 24°C",
    population: {
      plantsPerHa: "55 000 - 70 000",
      tonsPerHa: "60 - 80"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "60 - 80 days",
      harvestTime: "14 days"
    },
    rootDepth: "45 - 60cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 450,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 200,
        P: 60,
        K: 90
      },
      leafTestNorms: {
        N: 3.5,
        P: 0.25,
        K: 2
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Zn"],
    soilPH: "5.5 to 6.8",
    importantDiseasesInNamibia: ["Corn Leaf Bright", "Maize Dwarf Mosaic", "Common Rust"],
    importantPestsInNamibia: ["Leaf Miner", "Army Worms", "Cut Worms"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "November to May"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Cucumis melo",
    rangeNumber: 0,
    seedsPerKg: 0,
    kgOfSeedRequiredPerHectare: 0.75,
    directPlanting: "0.5kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "3 - 4 cm",
    plantSpacing: {
      intraRows: "100-200cm",
      interRows: "50 - 75cm"
    },
    germination: {
      averageDays: 5,
      optimumAirTemperature: 30
    },
    optimumGrowthTemperature: "20 - 30°C",
    population: {
      plantsPerHa: "4 000 - 6 000",
      tonsPerHa: "84 - 140"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "84 - 140 days",
      harvestTime: "21 days"
    },
    rootDepth: "40 - 60cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 420,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 244,
        P: 45,
        K: 276
      },
      leafTestNorms: {
        N: 0,
        P: 0,
        K: 0
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Mo", "B"],
    soilPH: "6 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August/September",
        harvesting: "January/February"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to March",
        harvesting: "November to July"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August/September",
        harvesting: "January/February"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to March",
        harvesting: "November to July"
      }
    }
  },
  {
    scientificName: "Ipomoea batatas",
    rangeNumber: 0,
    seedsPerKg: 0,
    kgOfSeedRequiredPerHectare: 0,
    directPlanting: "N/A",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: 40000,
    sowingDepth: "5cm",
    plantSpacing: {
      intraRows: "25 -30cm",
      interRows: "90 - 150cm"
    },
    germination: {
      averageDays: 0,
      optimumAirTemperature: 26
    },
    optimumGrowthTemperature: "16 - 29°C",
    population: {
      plantsPerHa: "40 000",
      tonsPerHa: "120 - 150"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "120 - 150 days",
      harvestTime: "Once"
    },
    rootDepth: "60 - 90+",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 525,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 200,
        P: 20,
        K: 160
      },
      leafTestNorms: {
        N: 0,
        P: 0,
        K: 0
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["B", "Mn", "Mo"],
    soilPH: "5 to 6.5",
    importantDiseasesInNamibia: ["Black Rot", "Sweet Potato Virus B"],
    importantPestsInNamibia: ["Sweet Potato Weevil", "Nematodes", "Aphids", "Leaf Miner", "Caterpillars"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to March",
        harvesting: "Year round"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to March",
        harvesting: "Year round"
      }
    }
  },
  {
    scientificName: "Beta vulgaris var. cicla",
    rangeNumber: 60000,
    seedsPerKg: 60000,
    kgOfSeedRequiredPerHectare: 5,
    directPlanting: "5kg/ha",
    numberOfTransplantsPerHectare: 90000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2 - 2.5cm",
    plantSpacing: {
      intraRows: "7 - 15cm",
      interRows: "30 - 45cm"
    },
    germination: {
      averageDays: 8,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "15 - 24°C",
    population: {
      plantsPerHa: "80 000 - 100 000",
      tonsPerHa: "56 days onward"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "4 - 5 months",
      harvestTime: "45 - 60 cm"
    },
    rootDepth: "45 - 60 cm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 375,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 100,
        P: 12,
        K: 100
      },
      leafTestNorms: {
        N: 5,
        P: 0.4,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Mg", "Cu", "Mo"],
    soilPH: "6 to 6.8",
    importantDiseasesInNamibia: ["Downy Mildew"],
    importantPestsInNamibia: ["Nematodes", "Caterpillars", "Cutworms"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Lycopersicon esculentum",
    rangeNumber: 300000,
    seedsPerKg: 300000,
    kgOfSeedRequiredPerHectare: 0.3,
    directPlanting: "0.3kg/ha",
    numberOfTransplantsPerHectare: 17000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "0.6 - 1cm",
    plantSpacing: {
      intraRows: "40cm",
      interRows: "150cm"
    },
    germination: {
      averageDays: 11,
      optimumAirTemperature: 20
    },
    optimumGrowthTemperature: "20 - 30°C",
    population: {
      plantsPerHa: "18 000 - 22 000",
      tonsPerHa: "112 - 280"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "6 months",
      harvestTime: "46 - 60cm"
    },
    rootDepth: "620mm+",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 620,
      firstPartOfSeason: 25,
      secondPartOfSeason: 45
    },
    macroElements: {
      kgPerHectare: {
        N: 450,
        P: 53,
        K: 701
      },
      leafTestNorms: {
        N: 5,
        P: 0.6,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Fe", "B", "Mo"],
    soilPH: "5.5 to 6.5",
    importantDiseasesInNamibia: ["Rust (early Bright Or Late Bright)", "Blossom End Rot", "Fussarium Wilt", "Tomato Mossaic Virus Rust"],
    importantPestsInNamibia: ["Whiteflies", "Tomato Pinworms", "Red Spider Mite", "Aphids", "African Bollworm", "Green Stinkbug", "Leaf Miners", "Nematodes", "Tuta Absoluta"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Lycopersicon esculentum",
    rangeNumber: 300000,
    seedsPerKg: 300000,
    kgOfSeedRequiredPerHectare: 0.3,
    directPlanting: "0.3kg/ha",
    numberOfTransplantsPerHectare: 21000,
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "0.6 - 1cm",
    plantSpacing: {
      intraRows: "40cm",
      interRows: "120 - 150cm"
    },
    germination: {
      averageDays: 11.5,
      optimumAirTemperature: 25.5
    },
    optimumGrowthTemperature: "21 - 30°C",
    population: {
      plantsPerHa: "18 000 - 22 000",
      tonsPerHa: "112 - 140"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "60 - 120 days",
      harvestTime: "30 - 60cm"
    },
    rootDepth: "620mm+",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 620,
      firstPartOfSeason: 25,
      secondPartOfSeason: 32.5
    },
    macroElements: {
      kgPerHectare: {
        N: 300,
        P: 35,
        K: 467
      },
      leafTestNorms: {
        N: 5,
        P: 0.6,
        K: 4
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Fe", "B", "Mo"],
    soilPH: "5.5 to 6.5",
    importantDiseasesInNamibia: ["Rust (early Bright Or Late Bright)", "Blossom End Rot", "Fussarium Wilt", "Tomato Mossaic Virus Rust"],
    importantPestsInNamibia: ["Whiteflies", "Tomato Pinworms", "Red Spider Mite", "Aphids", "African Bollworm", "Green Stinkbug", "Leaf Miners", "Nematodes", "Tuta Absoluta"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "July to February",
        harvesting: "July to September"
      },
      "Orange River Production Zone": {
        planting: "August to January",
        harvesting: "December to May"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  },
  {
    scientificName: "Citrullus lanatus",
    rangeNumber: 14000,
    seedsPerKg: 14000,
    kgOfSeedRequiredPerHectare: 1.5,
    directPlanting: "1 -2kg/ha",
    numberOfTransplantsPerHectare: "N/A",
    numberOfTubersOrCuttingsPerHectare: "N/A",
    sowingDepth: "2.5 -5cm",
    plantSpacing: {
      intraRows: "90 - 150cm",
      interRows: "180 - 200cm"
    },
    germination: {
      averageDays: 5,
      optimumAirTemperature: 30
    },
    optimumGrowthTemperature: "22 - 30°C",
    population: {
      plantsPerHa: "6000 +",
      tonsPerHa: "80 - 90"
    },
    growthPeriod: {
      daysFromPlantingToMaturity: "20 - 30 days",
      harvestTime: "90 - 120cm"
    },
    rootDepth: "420mm",
    irrigationWaterRequirement: {
      totalWaterRequirementPerSeason: 420,
      firstPartOfSeason: 25,
      secondPartOfSeason: 35
    },
    macroElements: {
      kgPerHectare: {
        N: 367,
        P: 67,
        K: 413
      },
      leafTestNorms: {
        N: 3.3,
        P: 0.45,
        K: 5
      }
    },
    sensitiveToDeficiencyOfMicroelements: ["Mo", "B"],
    soilPH: "6 to 6.8",
    importantDiseasesInNamibia: ["Mossaic Virus", "Fussarium Wilt", "Powdery Mildew"],
    importantPestsInNamibia: ["Aphids", "Boll Worms", "Green Stinkbugs"],
    plantingHarvestingDates: {
      "Central Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & November/December"
      },
      "Karst Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Kavango Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      },
      "North Central Production Zone": {
        planting: "June to September",
        harvesting: "September to December"
      },
      "Orange River Production Zone": {
        planting: "February/ March & August/September",
        harvesting: "May/June & November/December"
      },
      "South Production Zone": {
        planting: "Aug to Mid Feb",
        harvesting: "November to Jun"
      },
      "Zambezi Production Zone": {
        planting: "July to April",
        harvesting: "October to July"
      }
    }
  }
];

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
};