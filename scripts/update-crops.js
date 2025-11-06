"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var cropsPath = path_1.default.join(__dirname, '../lib/data/crops.ts');
var cropsContent = fs_1.default.readFileSync(cropsPath, 'utf8');
// First, let's update all germination objects
var updatedContent = cropsContent.replace(/germination: \{\s*averageDays: (\d+(?:\.\d+)?),\s*optimumAirTemperature: (\d+(?:\.\d+)?)\s*\}/g, function (match, days, temp) {
    return "germination: {\n      days: ".concat(days, ",\n      temperature: ").concat(temp, "\n    }");
});
// Now let's add all required fields for each crop
// We'll use the original data for defaults
var defaultCropData = {
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
var cropMatch = updatedContent.match(/export const crops: Crop\[\] = \[\s*{([^}]+)}/);
if (cropMatch) {
    var cropData = cropMatch[1];
    // Add required fields
    var updatedCropData = "{\n    name: \"Beetroot\",\n    image: \"https://example.com/images/beetroot.jpg\",\n    description: \"A root vegetable known for its deep red color and earthy flavor\",\n    kgPerHa: 8.5,".concat(cropData);
    updatedContent = updatedContent.replace(/export const crops: Crop\[\] = \[\s*{([^}]+)}/, "export const crops: Crop[] = [".concat(updatedCropData));
}
fs_1.default.writeFileSync(cropsPath, updatedContent);
console.log('Successfully updated crops.ts');
