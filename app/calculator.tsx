import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { crops } from "./data/crops";

// Type definitions
interface CalculatorResults {
  type: "seed" | "fertilizer" | "irrigation" | "yield";
  crop: string;
  fieldSize: number;
  [key: string]: any;
}

interface CropYield {
  tonsPerHa: number;
}

interface CropGrowth {
  temperature: string;
  population: string;
  yield: string | CropYield;
  period: string;
}

interface Crop {
  name: string;
  scientificName: string;
  image: string;
  description: string;
  seedsPerKg: number;
  kgPerHa: number;
  spacing: {
    intraRows: string;
    interRows: string;
  };
  sowingDepth: string;
  germination: {
    temperature: number;
    days: number;
  };
  growth: CropGrowth;
  rootDepth: string | number;
  irrigation: {
    total: number;
    firstPart: number;
    secondPart: number;
  };
  nutrients: {
    n: number;
    p: number;
    k: number;
  };
  leafAnalysis: {
    n: number;
    p: number;
    k: number;
  };
  microDeficiencies: string[];
  soilPH: string;
  diseases: string[];
  pests: string[];
}

export default function CalculatorScreen() {
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showResultsModal, setShowResultsModal] = useState(false);

  const calculators = [
    { id: "seed", name: "Seed Calculator", icon: "leaf", description: "Calculate seed requirements" },
    { id: "fertilizer", name: "Fertilizer Calculator", icon: "flask", description: "Calculate NPK needs" },
    { id: "irrigation", name: "Irrigation Calculator", icon: "water", description: "Calculate water needs" },
    { id: "yield", name: "Yield Estimator", icon: "trending-up", description: "Estimate crop yield" },
  ];

  const calculateSeeds = () => {
    if (!selectedCrop || !fieldSize) {
      Alert.alert("Missing Information", "Please select a crop and enter field size.");
      return;
    }

    const crop = crops.find((c: Crop) => c.name === selectedCrop);
    if (!crop) {
      Alert.alert("Error", "Selected crop not found.");
      return;
    }

    const size = parseFloat(fieldSize);
    if (isNaN(size) || size <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid field size.");
      return;
    }

    const seedsPerKg = crop.seedsPerKg;
    const kgPerHa = crop.kgPerHa;
    
    const totalKgNeeded = (kgPerHa * size) / 10000;
    const totalSeedsNeeded = totalKgNeeded * seedsPerKg;
    
    const results: CalculatorResults = {
      type: "seed",
      crop: crop.name,
      fieldSize: size,
      totalKgNeeded: totalKgNeeded.toFixed(2),
      totalSeedsNeeded: totalSeedsNeeded.toFixed(0),
      costEstimate: (totalKgNeeded * 50).toFixed(2),
      seedsPerKg: seedsPerKg.toLocaleString(),
      kgPerHa: kgPerHa,
    };
    
    setResults(results);
    setShowResultsModal(true);
  };

  const calculateFertilizer = () => {
    if (!selectedCrop || !fieldSize) {
      Alert.alert("Missing Information", "Please select a crop and enter field size.");
      return;
    }

    const crop = crops.find((c: Crop) => c.name === selectedCrop);
    if (!crop) {
      Alert.alert("Error", "Selected crop not found.");
      return;
    }

    const size = parseFloat(fieldSize);
    if (isNaN(size) || size <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid field size.");
      return;
    }

    const n = crop.nutrients.n;
    const p = crop.nutrients.p;
    const k = crop.nutrients.k;
    
    const nNeeded = (n * size) / 10000;
    const pNeeded = (p * size) / 10000;
    const kNeeded = (k * size) / 10000;
    
    const results: CalculatorResults = {
      type: "fertilizer",
      crop: crop.name,
      fieldSize: size,
      n: nNeeded.toFixed(2),
      p: pNeeded.toFixed(2),
      k: kNeeded.toFixed(2),
      costEstimate: ((nNeeded * 2) + (pNeeded * 3) + (kNeeded * 2)).toFixed(2),
      nPerHa: n,
      pPerHa: p,
      kPerHa: k,
    };
    
    setResults(results);
    setShowResultsModal(true);
  };

  const calculateIrrigation = () => {
    if (!selectedCrop || !fieldSize) {
      Alert.alert("Missing Information", "Please select a crop and enter field size.");
      return;
    }

    const crop = crops.find((c: Crop) => c.name === selectedCrop);
    if (!crop) {
      Alert.alert("Error", "Selected crop not found.");
      return;
    }

    const size = parseFloat(fieldSize);
    if (isNaN(size) || size <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid field size.");
      return;
    }

    const totalWater = crop.irrigation.total;
    
    const totalWaterNeeded = (totalWater * size) / 10000;
    const firstSeasonWeekly = (crop.irrigation.firstPart * size) / 10000;
    const secondSeasonWeekly = (crop.irrigation.secondPart * size) / 10000;
    
    const results: CalculatorResults = {
      type: "irrigation",
      crop: crop.name,
      fieldSize: size,
      totalWaterNeeded: totalWaterNeeded.toFixed(0),
      firstSeasonWeekly: firstSeasonWeekly.toFixed(0),
      secondSeasonWeekly: secondSeasonWeekly.toFixed(0),
      costEstimate: (totalWaterNeeded * 0.001).toFixed(2),
      totalWaterMm: totalWater,
      firstPartMm: crop.irrigation.firstPart,
      secondPartMm: crop.irrigation.secondPart,
    };
    
    setResults(results);
    setShowResultsModal(true);
  };

  const calculateYield = () => {
    if (!selectedCrop || !fieldSize) {
      Alert.alert("Missing Information", "Please select a crop and enter field size.");
      return;
    }

    const crop = crops.find((c: Crop) => c.name === selectedCrop);
    if (!crop) {
      Alert.alert("Error", "Selected crop not found.");
      return;
    }

    const size = parseFloat(fieldSize);
    if (isNaN(size) || size <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid field size.");
      return;
    }
    
    // Handle both string and object yield formats
    let yieldPerHa = 0;
    let yieldRange = "";
    
  // Some crop data shapes vary; cast to any to safely access optional yield object
  const yieldData = (crop.growth as any).yield;
    
    if (typeof yieldData === 'string') {
      yieldRange = yieldData;
      // Extract average from string like "25-40 tons/ha"
      const match = yieldData.match(/(\d+)-(\d+)/);
      if (match) {
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        yieldPerHa = (min + max) / 2;
      } else {
        // Handle single value like "30 tons/ha"
        const singleMatch = yieldData.match(/(\d+)/);
        if (singleMatch) {
          yieldPerHa = parseInt(singleMatch[1]);
        }
      }
    } else if (yieldData && typeof yieldData === 'object' && 'tonsPerHa' in (yieldData as any)) {
      yieldPerHa = (yieldData as any).tonsPerHa;
      yieldRange = `${yieldPerHa} tons/ha`;
    }
    
    if (yieldPerHa === 0) {
      Alert.alert("Data Error", "Yield data not available for this crop.");
      return;
    }
    
    const estimatedYield = (yieldPerHa * size) / 10000;
    
    const results: CalculatorResults = {
      type: "yield",
      crop: crop.name,
      fieldSize: size,
      estimatedYield: estimatedYield.toFixed(2),
      revenueEstimate: (estimatedYield * 500).toFixed(2),
      yieldPerHa: yieldPerHa,
      yieldRange: yieldRange,
    };
    
    setResults(results);
    setShowResultsModal(true);
  };

  const handleCalculate = () => {
    switch (calculatorType) {
      case "seed":
        calculateSeeds();
        break;
      case "fertilizer":
        calculateFertilizer();
        break;
      case "irrigation":
        calculateIrrigation();
        break;
      case "yield":
        calculateYield();
        break;
      default:
        Alert.alert("Error", "Please select a calculator type.");
    }
  };

  const renderResults = () => {
    if (!results) return null;

    switch (results.type) {
      case "seed":
        return (
          <View style={styles.resultsContent}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Field Size:</Text>
              <Text style={styles.resultValue}>{results.fieldSize} m²</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Seeds per kg:</Text>
              <Text style={styles.resultValue}>{results.seedsPerKg}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Required per ha:</Text>
              <Text style={styles.resultValue}>{results.kgPerHa} kg</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total seeds needed:</Text>
              <Text style={styles.resultValueHighlight}>{parseInt(results.totalSeedsNeeded).toLocaleString()}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total weight needed:</Text>
              <Text style={styles.resultValueHighlight}>{results.totalKgNeeded} kg</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Estimated cost:</Text>
              <Text style={styles.resultValue}>${results.costEstimate}</Text>
            </View>
          </View>
        );
      case "fertilizer":
        return (
          <View style={styles.resultsContent}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Field Size:</Text>
              <Text style={styles.resultValue}>{results.fieldSize} m²</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>NPK per ha:</Text>
              <Text style={styles.resultValue}>{results.nPerHa}-{results.pPerHa}-{results.kPerHa} kg</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Nitrogen (N):</Text>
              <Text style={styles.resultValueHighlight}>{results.n} kg</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Phosphorus (P):</Text>
              <Text style={styles.resultValueHighlight}>{results.p} kg</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Potassium (K):</Text>
              <Text style={styles.resultValueHighlight}>{results.k} kg</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Estimated cost:</Text>
              <Text style={styles.resultValue}>${results.costEstimate}</Text>
            </View>
          </View>
        );
      case "irrigation":
        return (
          <View style={styles.resultsContent}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Field Size:</Text>
              <Text style={styles.resultValue}>{results.fieldSize} m²</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total per season:</Text>
              <Text style={styles.resultValue}>{results.totalWaterMm}mm</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total water needed:</Text>
              <Text style={styles.resultValueHighlight}>{parseInt(results.totalWaterNeeded).toLocaleString()} liters</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>First part of season:</Text>
              <Text style={styles.resultValue}>{results.firstSeasonWeekly} liters/week</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Second part of season:</Text>
              <Text style={styles.resultValue}>{results.secondSeasonWeekly} liters/week</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Estimated cost:</Text>
              <Text style={styles.resultValue}>${results.costEstimate}</Text>
            </View>
          </View>
        );
      case "yield":
        return (
          <View style={styles.resultsContent}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Field Size:</Text>
              <Text style={styles.resultValue}>{results.fieldSize} m²</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Yield range:</Text>
              <Text style={styles.resultValue}>{results.yieldRange}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Estimated yield:</Text>
              <Text style={styles.resultValueHighlight}>{results.estimatedYield} tons</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Estimated revenue:</Text>
              <Text style={styles.resultValueHighlight}>${results.revenueEstimate}</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculator</Text>
        <Text style={styles.subtitle}>Calculate farming requirements</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Calculator Type</Text>
        <View style={styles.calculatorGrid}>
          {calculators.map(calc => (
            <TouchableOpacity
              key={calc.id}
              style={[
                styles.calculatorButton,
                calculatorType === calc.id && styles.selectedCalculator
              ]}
              onPress={() => setCalculatorType(calc.id)}
            >
              <Ionicons name={calc.icon as any} size={30} color={calculatorType === calc.id ? "white" : "#4CAF50"} />
              <Text style={[
                styles.calculatorButtonText,
                calculatorType === calc.id && styles.selectedCalculatorText
              ]}>
                {calc.name}
              </Text>
              <Text style={[
                styles.calculatorDescription,
                calculatorType === calc.id && styles.selectedCalculatorText
              ]}>
                {calc.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Crop</Text>
        <View style={styles.cropGrid}>
          {crops.map(crop => (
            <TouchableOpacity
              key={crop.name}
              style={[
                styles.cropButton,
                selectedCrop === crop.name && styles.selectedCrop
              ]}
              onPress={() => setSelectedCrop(crop.name)}
            >
              <Text style={[
                styles.cropButtonText,
                selectedCrop === crop.name && styles.selectedCropText
              ]}>
                {crop.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Field Size</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter field size in square meters"
            value={fieldSize}
            onChangeText={setFieldSize}
            keyboardType="numeric"
          />
          <View style={styles.inputHint}>
            <Ionicons name="information-circle-outline" size={16} color="#666" />
            <Text style={styles.inputHintText}>1 hectare = 10,000 m²</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={[
          styles.calculateButton,
          (!calculatorType || !selectedCrop || !fieldSize) && styles.disabledButton
        ]} 
        onPress={handleCalculate}
        disabled={!calculatorType || !selectedCrop || !fieldSize}
      >
        <Ionicons name="calculator" size={20} color="white" />
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      {/* Results Modal */}
      <Modal
        visible={showResultsModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowResultsModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Calculation Results</Text>
            <TouchableOpacity onPress={() => setShowResultsModal(false)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          
          {results && (
            <View style={styles.modalContent}>
              <View style={styles.resultHeader}>
                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                <Text style={styles.resultTitle}>{results.crop}</Text>
              </View>
              
              {renderResults()}
              
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => {
                    setShowResultsModal(false);
                    setResults(null);
                  }}
                >
                  <Text style={styles.secondaryButtonText}>New Calculation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => {
                    setShowResultsModal(false);
                    router.push({ 
                      pathname: "/crop-detail", 
                      params: { cropName: results.crop } 
                    });
                  }}
                >
                  <Text style={styles.primaryButtonText}>View Crop Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  section: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  calculatorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  calculatorButton: {
    width: "48%",
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  selectedCalculator: {
    backgroundColor: "#4CAF50",
  },
  calculatorButtonText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  calculatorDescription: {
    fontSize: 11,
    color: "#666",
    marginTop: 2,
    textAlign: "center",
  },
  selectedCalculatorText: {
    color: "white",
  },
  cropGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cropButton: {
    width: "48%",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  selectedCrop: {
    backgroundColor: "#4CAF50",
  },
  cropButtonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedCropText: {
    color: "white",
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputHint: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  inputHintText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
  calculateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  calculateButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  resultHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  resultsContent: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  resultLabel: {
    fontSize: 16,
    color: "#666",
    flex: 1,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  resultValueHighlight: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  primaryButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
  },
  secondaryButtonText: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
});