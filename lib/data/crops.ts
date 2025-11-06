import { Crop } from './types/crop';

export const crops: Crop[] = [
  {
    name: "Crop 1",
    scientificName: "Brassica oleracea var. capitata",
    image: "https://example.com/images/crop-1.jpg",
    description: "A nutritious crop suitable for various growing conditions.",
    seedsPerKg: 250000,
    kgPerHa: 0.8,
    spacing: {
      intraRows: "45cm",
      interRows: "60cm"
    },
    sowingDepth: "1-2cm",
    germination: {
      days: 7,
      temperature: 20
    },
    growth: {
      temperature: "15-25°C",
      population: "37000 plants/ha",
      yield: "35-65 t/ha",
      period: "90-120 days"
    },
    rootDepth: "45-60cm",
    irrigation: {
      total: 350,
      firstPart: 175,
      secondPart: 175
    },
    nutrients: {
      n: 120,
      p: 60,
      k: 100
    },
    leafAnalysis: {
      n: 3.5,
      p: 0.4,
      k: 2.5
    },
    microDeficiencies: ["B", "Mo"],
    soilPH: "6.0 to 7.0",
    diseases: ["Black rot", "Club root"],
    pests: ["Diamond back moth", "Aphids"],
    plantingHarvestingDates: {
      "Central": {
        "planting": "Feb-Mar, Aug-Sep",
        "harvesting": "May-Jun, Nov-Dec"
      },
      "North": {
        "planting": "Mar-Apr, Aug-Sep",
        "harvesting": "Jun-Jul, Nov-Dec"
      }
    }
  }
];