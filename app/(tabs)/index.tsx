import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { crops } from "../data/crops";
import { regions } from "../data/regions";

export default function HomeScreen() {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState("Central");

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "cropDoctor":
        router.push("/(tabs)/crop-doctor");
        break;
      case "weather":
        router.push("/(tabs)/weather-calendar");
        break;
      case "planning":
        router.push("/(tabs)/planning-tools");
        break;
      case "chat":
        router.push("/(tabs)/chat-assistant");
        break;
      default:
        Alert.alert("Action", `You pressed ${action}`);
    }
  };

  const getFeaturedCrops = () => {
    const currentMonth = new Date().getMonth();
    const regionData = regions.find(r => r.name === selectedRegion);
    
    if (!regionData) return [];
    
    return crops.filter(crop => {
      const cropRegionData = regionData.crops.find(c => c.name === crop.name);
      if (!cropRegionData) return false;
      
      const plantingMonths = cropRegionData.planting;
      return plantingMonths.includes(currentMonth);
    }).slice(0, 3);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AgriAI Pro</Text>
        <Text style={styles.subtitle}>Your Digital Farming Assistant</Text>
      </View>

      <View style={styles.regionSelector}>
        <Text style={styles.regionLabel}>Your Region:</Text>
        <View style={styles.regionButtons}>
          {regions.map(region => (
            <TouchableOpacity
              key={region.name}
              style={[
                styles.regionButton,
                selectedRegion === region.name && styles.selectedRegionButton
              ]}
              onPress={() => setSelectedRegion(region.name)}
            >
              <Text style={[
                styles.regionButtonText,
                selectedRegion === region.name && styles.selectedRegionButtonText
              ]}>
                {region.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction("cropDoctor")}
          >
            <Ionicons name="medkit" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Crop Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction("weather")}
          >
            <Ionicons name="cloud" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction("planning")}
          >
            <Ionicons name="calculator" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Planning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction("chat")}
          >
            <Ionicons name="chatbubbles" size={24} color="#4CAF50" />
            <Text style={styles.actionButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Recommended Crops for This Month</Text>
        {getFeaturedCrops().length > 0 ? (
          getFeaturedCrops().map(crop => (
            <TouchableOpacity
              key={crop.name}
              style={styles.cropCard}
              onPress={() => router.push({ 
                pathname: "/crop-detail", 
                params: { cropName: crop.name } 
              })}
            >
              <Image source={{ uri: crop.image }} style={styles.cropImage} />
              <View style={styles.cropInfo}>
                <Text style={styles.cropName}>{crop.name}</Text>
                <Text style={styles.cropScientific}>{crop.scientificName}</Text>
                <Text style={styles.cropDescription}>{crop.description}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noCropsMessage}>No crops recommended for this month in your region.</Text>
        )}
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Farming Tips</Text>
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={24} color="#FFC107" />
          <Text style={styles.tipText}>
            Remember to adjust your irrigation schedule based on the current rainfall patterns in your region.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={24} color="#FFC107" />
          <Text style={styles.tipText}>
            Regular soil testing can help optimize fertilizer use and improve crop yields.
          </Text>
        </View>
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
  regionSelector: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  regionLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  regionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  regionButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 8,
    minWidth: 80,
    alignItems: "center",
  },
  selectedRegionButton: {
    backgroundColor: "#4CAF50",
  },
  regionButtonText: {
    fontSize: 12,
    color: "#333",
  },
  selectedRegionButtonText: {
    color: "white",
  },
  quickActions: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
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
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    width: "22%",
  },
  actionButtonText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  featuredSection: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cropCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  cropImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cropScientific: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
  cropDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  noCropsMessage: {
    textAlign: "center",
    padding: 20,
    color: "#666",
  },
  tipsSection: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  tipCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  tipText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
  },
});