import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { diseases } from "./data/diseases";

export default function DiseaseDetailScreen() {
  const { diseaseName } = useLocalSearchParams();
  
  const disease = diseases.find(d => d.name === diseaseName);
  
  if (!disease) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Disease not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{disease.name}</Text>
        <Text style={styles.subtitle}>{disease.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Symptoms</Text>
        {disease.symptoms.map((symptom, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="alert-circle" size={20} color="#FF5722" />
            <Text style={styles.listItemText}>{symptom}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treatment</Text>
        {disease.treatment.map((treatment, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="medkit" size={20} color="#4CAF50" />
            <Text style={styles.listItemText}>{treatment}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prevention</Text>
        {disease.prevention.map((prevention, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="shield-checkmark" size={20} color="#2196F3" />
            <Text style={styles.listItemText}>{prevention}</Text>
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
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 8,
  },
  listItemText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    color: "#333",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 50,
  },
});