import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { regions } from "../data/regions";

export default function WeatherCalendarScreen() {
  const [selectedRegion, setSelectedRegion] = useState("Central");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getRegionData = () => {
    return regions.find(r => r.name === selectedRegion);
  };

  const getCropsForMonth = () => {
    const regionData = getRegionData();
    if (!regionData) return [];
    
    return regionData.crops.filter(crop => {
      return crop.planting.includes(selectedMonth) || crop.harvesting.includes(selectedMonth);
    });
  };

  const getWeatherData = () => {
    return {
      temperature: {
        min: 15 + Math.floor(Math.random() * 10),
        max: 25 + Math.floor(Math.random() * 10),
      },
      rainfall: Math.floor(Math.random() * 50),
      humidity: 40 + Math.floor(Math.random() * 40),
      windSpeed: 5 + Math.floor(Math.random() * 15),
    };
  };

  const weatherData = getWeatherData();
  const cropsForMonth = getCropsForMonth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather & Calendar</Text>
        <Text style={styles.subtitle}>Plan your farming activities</Text>
      </View>

      <View style={styles.regionSelector}>
        <Text style={styles.sectionTitle}>Select Region</Text>
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

      <View style={styles.monthSelector}>
        <Text style={styles.sectionTitle}>Select Month</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={month}
              style={[
                styles.monthButton,
                selectedMonth === index && styles.selectedMonthButton
              ]}
              onPress={() => setSelectedMonth(index)}
            >
              <Text style={[
                styles.monthButtonText,
                selectedMonth === index && styles.selectedMonthButtonText
              ]}>
                {month.substring(0, 3)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.weatherSection}>
        <Text style={styles.sectionTitle}>Weather Forecast</Text>
        <View style={styles.weatherCard}>
          <View style={styles.weatherRow}>
            <Ionicons name="thermometer" size={24} color="#FF5722" />
            <Text style={styles.weatherLabel}>Temperature:</Text>
            <Text style={styles.weatherValue}>{weatherData.temperature.min}°C - {weatherData.temperature.max}°C</Text>
          </View>
          <View style={styles.weatherRow}>
            <Ionicons name="water" size={24} color="#2196F3" />
            <Text style={styles.weatherLabel}>Rainfall:</Text>
            <Text style={styles.weatherValue}>{weatherData.rainfall}mm</Text>
          </View>
          <View style={styles.weatherRow}>
            <Ionicons name="water" size={24} color="#03A9F4" />
            <Text style={styles.weatherLabel}>Humidity:</Text>
            <Text style={styles.weatherValue}>{weatherData.humidity}%</Text>
          </View>
          <View style={styles.weatherRow}>
            <Ionicons name="wind" size={24} color="#607D8B" />
            <Text style={styles.weatherLabel}>Wind Speed:</Text>
            <Text style={styles.weatherValue}>{weatherData.windSpeed}km/h</Text>
          </View>
        </View>
      </View>

      <View style={styles.calendarSection}>
        <Text style={styles.sectionTitle}>Farming Calendar for {months[selectedMonth]}</Text>
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <View style={styles.calendarHeaderItem}>
              <Text style={styles.calendarHeaderText}>Activity</Text>
            </View>
            <View style={styles.calendarHeaderItem}>
              <Text style={styles.calendarHeaderText}>Crops</Text>
            </View>
          </View>
          
          <View style={styles.calendarRow}>
            <View style={styles.calendarActivity}>
              <Ionicons name="leaf" size={20} color="#4CAF50" />
              <Text style={styles.calendarActivityText}>Planting</Text>
            </View>
            <View style={styles.calendarCrops}>
              {cropsForMonth.filter(c => c.planting.includes(selectedMonth)).map((crop, index) => (
                <Text key={index} style={styles.calendarCropText}>{crop.name}</Text>
              ))}
              {cropsForMonth.filter(c => c.planting.includes(selectedMonth)).length === 0 && (
                <Text style={styles.noCropsText}>None</Text>
              )}
            </View>
          </View>
          
          <View style={styles.calendarRow}>
            <View style={styles.calendarActivity}>
              <Ionicons name="basket" size={20} color="#FF9800" />
              <Text style={styles.calendarActivityText}>Harvesting</Text>
            </View>
            <View style={styles.calendarCrops}>
              {cropsForMonth.filter(c => c.harvesting.includes(selectedMonth)).map((crop, index) => (
                <Text key={index} style={styles.calendarCropText}>{crop.name}</Text>
              ))}
              {cropsForMonth.filter(c => c.harvesting.includes(selectedMonth)).length === 0 && (
                <Text style={styles.noCropsText}>None</Text>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.alertsSection}>
        <Text style={styles.sectionTitle}>Weather Alerts</Text>
        <View style={styles.alertCard}>
          <View style={styles.alertRow}>
            <Ionicons name="warning" size={20} color="#FFC107" />
            <Text style={styles.alertText}>High temperatures expected next week. Consider increasing irrigation.</Text>
          </View>
          <View style={styles.alertRow}>
            <Ionicons name="warning" size={20} color="#FFC107" />
            <Text style={styles.alertText}>Low rainfall forecast for this month. Plan water conservation measures.</Text>
          </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
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
  monthSelector: {
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
  monthButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
  },
  selectedMonthButton: {
    backgroundColor: "#4CAF50",
  },
  monthButtonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedMonthButtonText: {
    color: "white",
  },
  weatherSection: {
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
  weatherCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  weatherRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  weatherLabel: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  weatherValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarSection: {
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
  calendarCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  calendarHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10,
  },
  calendarHeaderItem: {
    flex: 1,
    alignItems: "center",
  },
  calendarHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  calendarActivity: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
  },
  calendarActivityText: {
    fontSize: 14,
    marginLeft: 10,
  },
  calendarCrops: {
    flex: 1,
  },
  calendarCropText: {
    fontSize: 14,
    marginBottom: 3,
  },
  noCropsText: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  alertsSection: {
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
  alertCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  alertRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  alertText: {
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
});