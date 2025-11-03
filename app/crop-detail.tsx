import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { crops } from "./data/crops";

export default function CropDetailScreen() {
  const router = useRouter();
  const { cropName } = useLocalSearchParams();
  
  const crop = crops.find(c => c.name === cropName);
  
  if (!crop) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Crop not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{crop.name}</Text>
        <Text style={styles.subtitle}>{crop.scientificName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General Information</Text>
        <Text style={styles.description}>{crop.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Planting Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Seeds per kg:</Text>
          <Text style={styles.value}>{crop.seedsPerKg.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kg per hectare:</Text>
          <Text style={styles.value}>{crop.kgPerHa} kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sowing depth:</Text>
          <Text style={styles.value}>{crop.sowingDepth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Spacing (intra-rows):</Text>
          <Text style={styles.value}>{crop.spacing.intraRows}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Spacing (inter-rows):</Text>
          <Text style={styles.value}>{crop.spacing.interRows}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Growth Conditions</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Germination temp:</Text>
          <Text style={styles.value}>{crop.germination.temperature}°C</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Germination days:</Text>
          <Text style={styles.value}>{crop.germination.days} days</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Growth temp:</Text>
          <Text style={styles.value}>{crop.growth.temperature}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Population:</Text>
          <Text style={styles.value}>{crop.growth.population}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Yield:</Text>
          <Text style={styles.value}>{crop.growth.yield}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Growth period:</Text>
          <Text style={styles.value}>{crop.growth.period}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Irrigation Requirements</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Total water:</Text>
          <Text style={styles.value}>{crop.irrigation.total}mm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>First part:</Text>
          <Text style={styles.value}>{crop.irrigation.firstPart}mm/week</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Second part:</Text>
          <Text style={styles.value}>{crop.irrigation.secondPart}mm/week</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrient Requirements (kg/ha)</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nitrogen (N):</Text>
          <Text style={styles.value}>{crop.nutrients.n} kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phosphorus (P):</Text>
          <Text style={styles.value}>{crop.nutrients.p} kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Potassium (K):</Text>
          <Text style={styles.value}>{crop.nutrients.k} kg</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leaf Analysis Norms (%)</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nitrogen (N):</Text>
          <Text style={styles.value}>{crop.leafAnalysis.n}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phosphorus (P):</Text>
          <Text style={styles.value}>{crop.leafAnalysis.p}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Potassium (K):</Text>
          <Text style={styles.value}>{crop.leafAnalysis.k}%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Soil & Environment</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Soil pH:</Text>
          <Text style={styles.value}>{crop.soilPH}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Root depth:</Text>
          <Text style={styles.value}>{crop.rootDepth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Micro deficiencies:</Text>
          <Text style={styles.value}>{crop.microDeficiencies.join(", ")}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Diseases</Text>
        {crop.diseases.map((disease, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => router.push({ 
              pathname: "/disease-detail", 
              params: { diseaseName: disease } 
            })}
          >
            <Ionicons name="bug" size={20} color="#FF5722" />
            <Text style={styles.listItemText}>{disease}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Pests</Text>
        {crop.pests.map((pest, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="bug" size={20} color="#FF9800" />
            <Text style={styles.listItemText}>{pest}</Text>
          </View>
        ))}
      </View>
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
    fontStyle: "italic",
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  listItemText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 50,
  },
});