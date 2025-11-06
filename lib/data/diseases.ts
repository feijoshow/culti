// data/diseases.ts
import { Disease } from './types/disease';

export const diseases: Disease[] = [
  {
    name: "Leaf Spot",
    symptoms: [
      "Small, circular spots on leaves",
      "Spots may have brown or gray centers",
      "Yellowing around spots",
      "Severe cases cause leaf drop"
    ],
    treatment: [
      "Remove and destroy infected leaves",
      "Apply copper-based fungicide",
      "Ensure proper air circulation",
      "Avoid overhead watering"
    ],
    prevention: [
      "Plant disease-resistant varieties",
      "Maintain proper spacing between plants",
      "Water at the base of plants",
      "Apply fungicide preventively in humid conditions"
    ],
    affectedCrops: ["Beetroot", "Swiss Chard (Spinach)"]
  },
  {
    name: "Beet Curly Top",
    symptoms: [
      "Curled and distorted leaves",
      "Yellowing of leaves",
      "Stunted growth",
      "Reduced root development"
    ],
    treatment: [
      "Remove and destroy infected plants",
      "Control leafhopper vectors",
      "Apply insecticide for leafhoppers"
    ],
    prevention: [
      "Use resistant varieties",
      "Control weeds that host leafhoppers",
      "Use reflective mulches"
    ],
    affectedCrops: ["Beetroot"]
  },
  {
    name: "Downy Mildew",
    symptoms: [
      "Yellow spots on upper leaf surface",
      "Grayish mold on underside of leaves",
      "Leaf curling and distortion",
      "Severe infections cause leaf death"
    ],
    treatment: [
      "Apply copper-based fungicides",
      "Remove infected plant parts",
      "Improve air circulation"
    ],
    prevention: [
      "Use resistant varieties",
      "Avoid overhead watering",
      "Ensure proper spacing",
      "Apply fungicide preventively in wet conditions"
    ],
    affectedCrops: ["Beetroot", "Broccoli", "Cabbage", "Swiss Chard (Spinach)", "Pumpkins"]
  },
  {
    name: "Rhizomania",
    symptoms: [
      "Stunted growth",
      "Yellowing of leaves",
      "Poor root development",
      "Beard-like root growth"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove and destroy infected plants",
      "Soil solarization in hot climates"
    ],
    prevention: [
      "Use resistant varieties",
      "Crop rotation with non-host plants",
      "Avoid moving soil from infected areas",
      "Clean equipment between fields"
    ],
    affectedCrops: ["Beetroot"]
  },
  {
    name: "White Rust",
    symptoms: [
      "White pustules on leaves and stems",
      "Yellowing of leaves",
      "Distorted growth",
      "Reduced yield"
    ],
    treatment: [
      "Apply fungicides with active ingredients like azoxystrobin",
      "Remove infected plant parts"
    ],
    prevention: [
      "Use resistant varieties",
      "Crop rotation",
      "Proper spacing for air circulation",
      "Avoid overhead watering"
    ],
    affectedCrops: ["Broccoli"]
  },
  {
    name: "Powdery Mildew",
    symptoms: [
      "White, powdery coating on leaves",
      "Yellowing and dying of leaves",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "Apply sulfur-based fungicides",
      "Use neem oil spray",
      "Remove infected plant parts"
    ],
    prevention: [
      "Plant in full sun",
      "Provide adequate spacing",
      "Water at the base of plants",
      "Apply milk spray as preventive measure"
    ],
    affectedCrops: ["Broccoli", "Cabbage", "Carrot", "Cucumis sativus", "Cucurbita pepo", "Cucurbita maxima", "Cucurbita pepo (moschata)", "Zea mays var. saccharata", "Cucumis melo", "Citrullus lanatus"]
  },
  {
    name: "Bacteria Leaf Spot",
    symptoms: [
      "Water-soaked spots on leaves",
      "Spots turn brown or black",
      "Yellowing around spots",
      "Leaf drop in severe cases"
    ],
    treatment: [
      "Apply copper-based bactericides",
      "Remove infected plant parts",
      "Avoid working with plants when wet"
    ],
    prevention: [
      "Use disease-free seeds",
      "Crop rotation",
      "Avoid overhead watering",
      "Proper plant spacing"
    ],
    affectedCrops: ["Broccoli", "Cabbage"]
  },
  {
    name: "Black Rot",
    symptoms: [
      "V-shaped yellow lesions on leaf edges",
      "Blackening of veins",
      "Wilting and plant death",
      "Head rot in cabbage"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove and destroy infected plants",
      "Crop rotation"
    ],
    prevention: [
      "Use disease-free seeds",
      "Crop rotation with non-brassica plants",
      "Proper drainage",
      "Resistant varieties"
    ],
    affectedCrops: ["Broccoli", "Cabbage"]
  },
  {
    name: "Bacterial Spot",
    symptoms: [
      "Water-soaked spots on leaves and fruit",
      "Spots become dark and raised",
      "Leaf yellowing and drop",
      "Fruit spotting and deformation"
    ],
    treatment: [
      "Apply copper-based bactericides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Use disease-free seeds",
      "Crop rotation",
      "Avoid overhead watering",
      "Resistant varieties"
    ],
    affectedCrops: ["Cabbage", "Capsicum spp"]
  },
  {
    name: "Soft Rot",
    symptoms: [
      "Water-soaked lesions on heads",
      "Foul odor",
      "Slimy texture",
      "Rapid decay"
    ],
    treatment: [
      "No effective treatment once infected",
      "Remove infected plants",
      "Improve drainage"
    ],
    prevention: [
      "Proper spacing for air circulation",
      "Avoid excessive nitrogen",
      "Harvest at proper maturity",
      "Handle carefully to avoid wounds"
    ],
    affectedCrops: ["Cabbage"]
  },
  {
    name: "Leaf Bright",
    symptoms: [
      "Yellowing of leaves",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation"
    ],
    affectedCrops: ["Carrot", "Solanum Tuberosum"]
  },
  {
    name: "Mossaic Virus",
    symptoms: [
      "Mottled pattern on leaves",
      "Yellowing between veins",
      "Stunted growth",
      "Reduced yield and quality"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove and destroy infected plants",
      "Control insect vectors"
    ],
    prevention: [
      "Use resistant varieties",
      "Control aphids and other vectors",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Cucumis sativus", "Cucurbita pepo", "Cucurbita maxima", "Cucurbita pepo (moschata)", "Zea mays var. saccharata", "Cucumis melo", "Citrullus lanatus"]
  },
  {
    name: "Fussarium Wilt",
    symptoms: [
      "Yellowing and wilting of leaves",
      "Stunted growth",
      "Discoloration of stem tissue",
      "Plant death"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove and destroy infected plants",
      "Soil solarization"
    ],
    prevention: [
      "Use resistant varieties",
      "Crop rotation",
      "Avoid overwatering",
      "Proper drainage"
    ],
    affectedCrops: ["Cucumis sativus", "Cucurbita pepo", "Cucurbita maxima", "Cucurbita pepo (moschata)", "Cucumis melo", "Capsicum spp", "Citrullus lanatus"]
  },
  {
    name: "Thrips",
    symptoms: [
      "Silvering of leaves",
      "Black fecal spots",
      "Distorted growth",
      "Reduced yield"
    ],
    treatment: [
      "Apply insecticidal soap",
      "Use neem oil spray",
      "Release beneficial insects"
    ],
    prevention: [
      "Remove weeds around plants",
      "Use reflective mulches",
      "Monitor plants regularly",
      "Introduce predatory insects"
    ],
    affectedCrops: ["Lactuca sativa"]
  },
  {
    name: "Mildew",
    symptoms: [
      "White powdery growth on leaves",
      "Yellowing of leaves",
      "Leaf drop",
      "Reduced yield"
    ],
    treatment: [
      "Apply fungicides",
      "Remove infected plant parts",
      "Improve air circulation"
    ],
    prevention: [
      "Proper spacing",
      "Avoid overhead watering",
      "Resistant varieties"
    ],
    affectedCrops: ["Lactuca sativa"]
  },
  {
    name: "Anthracnose",
    symptoms: [
      "Small, dark sunken spots on leaves",
      "Spots may enlarge and merge",
      "Leaf drop",
      "Reduced yield"
    ],
    treatment: [
      "Apply copper-based fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation",
      "Avoid overhead watering"
    ],
    affectedCrops: ["Lactuca sativa"]
  },
  {
    name: "Pink Rot",
    symptoms: [
      "Pinkish discoloration of bulbs",
      "Soft, watery rot",
      "Foul odor",
      "Bulb collapse"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected bulbs",
      "Improve drainage"
    ],
    prevention: [
      "Proper curing before storage",
      "Good ventilation",
      "Avoid mechanical damage",
      "Store at proper temperature"
    ],
    affectedCrops: ["Allium cepa"]
  },
  {
    name: "Neck Rot",
    symptoms: [
      "Gray mold at neck of bulb",
      "Soft rot",
      "Bulb decay",
      "Foul odor"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected bulbs",
      "Improve ventilation"
    ],
    prevention: [
      "Proper curing before storage",
      "Good ventilation",
      "Avoid high humidity",
      "Store at proper temperature"
    ],
    affectedCrops: ["Allium cepa"]
  },
  {
    name: "Early Bright",
    symptoms: [
      "Yellow spots on leaves",
      "Spots enlarge and turn brown",
      "Leaf drop",
      "Reduced yield"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation"
    ],
    affectedCrops: ["Solanum Tuberosum", "Lycopersicon esculentum"]
  },
  {
    name: "Late Bright",
    symptoms: [
      "Dark spots on tubers",
      "Irregular shaped lesions",
      "Corky texture",
      "Reduced quality"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected tubers",
      "Crop rotation"
    ],
    prevention: [
      "Use certified seed potatoes",
      "Crop rotation",
      "Proper sanitation",
      "Avoid wounding tubers"
    ],
    affectedCrops: ["Solanum Tuberosum", "Lycopersicon esculentum"]
  },
  {
    name: "Rhizictonia Rot",
    symptoms: [
      "Dark, sunken lesions on tubers",
      "Corky texture",
      "Misshapen tubers",
      "Reduced quality"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected tubers",
      "Crop rotation"
    ],
    prevention: [
      "Use certified seed potatoes",
      "Crop rotation",
      "Proper sanitation",
      "Avoid wounding tubers"
    ],
    affectedCrops: ["Solanum Tuberosum"]
  },
  {
    name: "Common Scab",
    symptoms: [
      "Rough, raised lesions on tubers",
      "Corky texture",
      "Superficial damage",
      "Reduced market quality"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected tubers",
      "Crop rotation"
    ],
    prevention: [
      "Maintain proper soil pH",
      "Crop rotation",
      "Avoid excessive lime",
      "Proper irrigation"
    ],
    affectedCrops: ["Solanum Tuberosum"]
  },
  {
    name: "Mosaic Potato Virus",
    symptoms: [
      "Mottled pattern on leaves",
      "Yellowing between veins",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Control aphid vectors"
    ],
    prevention: [
      "Use certified seed potatoes",
      "Control aphids",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Solanum Tuberosum"]
  },
  {
    name: "Potato Leaf Roll Virus",
    symptoms: [
      "Rolling of upper leaves",
      "Leathery texture",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Control aphid vectors"
    ],
    prevention: [
      "Use certified seed potatoes",
      "Control aphids",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Solanum Tuberosum"]
  },
  {
    name: "Bacteria Wilt",
    symptoms: [
      "Wilting of leaves",
      "Yellowing of foliage",
      "Stunted growth",
      "Plant death"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Crop rotation"
    ],
    prevention: [
      "Use disease-free planting material",
      "Crop rotation",
      "Proper drainage",
      "Resistant varieties"
    ],
    affectedCrops: ["Solanum Tuberosum"]
  },
  {
    name: "Black Rot",
    symptoms: [
      "Dark, sunken lesions on roots",
      "Foul odor",
      "Soft rot",
      "Plant death"
    ],
    treatment: [
      "No effective treatment",
      "Remove infected plants",
      "Crop rotation"
    ],
    prevention: [
      "Crop rotation",
      "Proper drainage",
      "Resistant varieties",
      "Sanitation"
    ],
    affectedCrops: ["Ipomoea batatas"]
  },
  {
    name: "Sweet Potato Virus B",
    symptoms: [
      "Mottled pattern on leaves",
      "Stunted growth",
      "Reduced yield",
      "Poor root development"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Control insect vectors"
    ],
    prevention: [
      "Use disease-free planting material",
      "Control aphids and whiteflies",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Ipomoea batatas"]
  },
  {
    name: "Rust (early Bright Or Late Bright)",
    symptoms: [
      "Orange-brown pustules on leaves",
      "Yellowing of leaves",
      "Leaf drop",
      "Reduced yield"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation",
      "Avoid overhead watering"
    ],
    affectedCrops: ["Lycopersicon esculentum"]
  },
  {
    name: "Blossom End Rot",
    symptoms: [
      "Water-soaked spot at blossom end of fruit",
      "Spot turns dark and leathery",
      "Fruit deformation",
      "Secondary infections may occur"
    ],
    treatment: [
      "No effective treatment for affected fruit",
      "Remove affected fruit",
      "Adjust calcium levels in soil"
    ],
    prevention: [
      "Maintain consistent soil moisture",
      "Ensure adequate calcium in soil",
      "Avoid excessive nitrogen",
      "Proper pH levels"
    ],
    affectedCrops: ["Lycopersicon esculentum"]
  },
  {
    name: "Tomato Mossaic Virus Rust",
    symptoms: [
      "Mottled pattern on leaves",
      "Yellowing between veins",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Control insect vectors"
    ],
    prevention: [
      "Use resistant varieties",
      "Control aphids and other vectors",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Lycopersicon esculentum"]
  },
  {
    name: "Corn Leaf Bright",
    symptoms: [
      "Yellowing of leaves",
      "Stunted growth",
      "Reduced yield"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation"
    ],
    affectedCrops: ["Zea mays var. saccharata"]
  },
  {
    name: "Maize Dwarf Mosaic",
    symptoms: [
      "Mottled pattern on leaves",
      "Stunted growth",
      "Shortened internodes",
      "Reduced yield"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove infected plants",
      "Control insect vectors"
    ],
    prevention: [
      "Use resistant varieties",
      "Control aphids and leafhoppers",
      "Remove weeds that host viruses",
      "Clean tools between plants"
    ],
    affectedCrops: ["Zea mays var. saccharata"]
  },
  {
    name: "Common Rust",
    symptoms: [
      "Orange-brown pustules on leaves",
      "Yellowing of leaves",
      "Leaf death in severe cases",
      "Reduced yield"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove infected plant parts"
    ],
    prevention: [
      "Crop rotation",
      "Resistant varieties",
      "Proper sanitation",
      "Avoid overhead watering"
    ],
    affectedCrops: ["Zea mays var. saccharata"]
  }
];