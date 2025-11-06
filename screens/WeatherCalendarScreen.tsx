// app/screens/WeatherCalendarScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { fetchWeather } from '../lib/api';
import { regions } from '../lib/data/regions';
import { getCommonName, getCropsForCurrentMonth } from '../lib/data/utils';
import { colors, spacing, typography } from '../lib/theme';

const WeatherCalendarScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cropsForMonth, setCropsForMonth] = useState<any[]>([]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    // Load weather data (API or mock)
    (async () => {
      try {
        const data = await fetchWeather(selectedRegion.name);
        setWeatherData(data);
      } catch (err) {
        // Fallback to local mock generation when API unavailable
        loadWeatherData();
      }
    })();

    // Load crops for selected month and region
    const crops = getCropsForCurrentMonth(selectedRegion.name);
    const filteredCrops = crops.filter(crop => {
      const dates = crop.plantingHarvestingDates[selectedRegion.name];
      if (!dates) return false;
      
      return dates.planting.includes(months[selectedMonth]) || 
             dates.harvesting.includes(months[selectedMonth]);
    });
    setCropsForMonth(filteredCrops);
  }, [selectedRegion, selectedMonth]);

  const loadWeatherData = () => {
    // Mock weather data - in a real app, this would come from a weather API
    setWeatherData({
      temperature: {
        min: 15 + Math.floor(Math.random() * 10),
        max: 25 + Math.floor(Math.random() * 10),
      },
      rainfall: Math.floor(Math.random() * 50),
      humidity: 40 + Math.floor(Math.random() * 40),
      windSpeed: 5 + Math.floor(Math.random() * 15),
      forecast: generateForecast(),
    });
  };

  const generateForecast = () => {
    const forecast: { [key: string]: any } = {};
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      forecast[dateStr] = {
        temperature: {
          min: 15 + Math.floor(Math.random() * 10),
          max: 25 + Math.floor(Math.random() * 10),
        },
        rainfall: Math.floor(Math.random() * 20),
        humidity: 40 + Math.floor(Math.random() * 40),
        windSpeed: 5 + Math.floor(Math.random() * 15),
        condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
      };
    }
    return forecast;
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Sunny':
        return 'sunny';
      case 'Partly Cloudy':
        return 'partly-sunny';
      case 'Cloudy':
        return 'cloud';
      case 'Light Rain':
        return 'rainy';
      default:
        return 'sunny';
    }
  };

  const getWeatherAlerts = () => {
    const alerts = [];
    
    if (weatherData.temperature.max > 35) {
      alerts.push({
        type: 'warning',
        message: 'High temperatures expected. Increase irrigation.',
      });
    }
    
    if (weatherData.rainfall < 10) {
      alerts.push({
        type: 'info',
        message: 'Low rainfall forecast. Plan water conservation.',
      });
    }
    
    if (weatherData.windSpeed > 20) {
      alerts.push({
        type: 'warning',
        message: 'Strong winds expected. Secure young plants.',
      });
    }
    
    return alerts;
  };

  const alerts = getWeatherAlerts();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather & Calendar</Text>
        <Text style={styles.subtitle}>Plan your farming activities</Text>
      </View>

      <View style={styles.regionSelector}>
        <Text style={styles.sectionTitle}>Select Region</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {regions.map(region => (
            <TouchableOpacity
              key={region.name}
              style={[
                styles.regionButton,
                selectedRegion.name === region.name && styles.selectedRegionButton
              ]}
              onPress={() => setSelectedRegion(region)}
            >
              <Text style={[
                styles.regionButtonText,
                selectedRegion.name === region.name && styles.selectedRegionButtonText
              ]}>
                {region.name.replace(' Production Zone', '')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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

      {weatherData && (
        <View style={styles.weatherSection}>
          <Text style={styles.sectionTitle}>Current Weather</Text>
          <View style={styles.weatherCard}>
            <View style={styles.weatherRow}>
              <Ionicons name="thermometer" size={24} color={colors.error} />
              <Text style={styles.weatherLabel}>Temperature:</Text>
              <Text style={styles.weatherValue}>
                {weatherData.temperature.min}°C - {weatherData.temperature.max}°C
              </Text>
            </View>
            <View style={styles.weatherRow}>
              <Ionicons name="water" size={24} color={colors.info} />
              <Text style={styles.weatherLabel}>Rainfall:</Text>
              <Text style={styles.weatherValue}>{weatherData.rainfall}mm</Text>
            </View>
            <View style={styles.weatherRow}>
              <Ionicons name="water" size={24} color={colors.accent} />
              <Text style={styles.weatherLabel}>Humidity:</Text>
              <Text style={styles.weatherValue}>{weatherData.humidity}%</Text>
            </View>
            <View style={styles.weatherRow}>
              <Ionicons name="flag" size={24} color={colors.textLight} />
              <Text style={styles.weatherLabel}>Wind Speed:</Text>
              <Text style={styles.weatherValue}>{weatherData.windSpeed}km/h</Text>
            </View>
          </View>
        </View>
      )}

      <View style={styles.calendarSection}>
        <Text style={styles.sectionTitle}>Farming Calendar for {months[selectedMonth]}</Text>
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarHeaderText}>Activity</Text>
            <Text style={styles.calendarHeaderText}>Crops</Text>
          </View>
          
          <View style={styles.calendarRow}>
            <View style={styles.calendarActivity}>
              <Ionicons name="leaf" size={20} color={colors.primary} />
              <Text style={styles.calendarActivityText}>Planting</Text>
            </View>
            <View style={styles.calendarCrops}>
              {cropsForMonth.filter(c => 
                c.plantingHarvestingDates[selectedRegion.name]?.planting.includes(months[selectedMonth])
              ).map((crop, index) => (
                <Text key={index} style={styles.calendarCropText}>
                  {getCommonName(crop.scientificName)}
                </Text>
              ))}
              {cropsForMonth.filter(c => 
                c.plantingHarvestingDates[selectedRegion.name]?.planting.includes(months[selectedMonth])
              ).length === 0 && (
                <Text style={styles.noCropsText}>None</Text>
              )}
            </View>
          </View>
          
          <View style={styles.calendarRow}>
            <View style={styles.calendarActivity}>
              <Ionicons name="basket" size={20} color={colors.secondary} />
              <Text style={styles.calendarActivityText}>Harvesting</Text>
            </View>
            <View style={styles.calendarCrops}>
              {cropsForMonth.filter(c => 
                c.plantingHarvestingDates[selectedRegion.name]?.harvesting.includes(months[selectedMonth])
              ).map((crop, index) => (
                <Text key={index} style={styles.calendarCropText}>
                  {getCommonName(crop.scientificName)}
                </Text>
              ))}
              {cropsForMonth.filter(c => 
                c.plantingHarvestingDates[selectedRegion.name]?.harvesting.includes(months[selectedMonth])
              ).length === 0 && (
                <Text style={styles.noCropsText}>None</Text>
              )}
            </View>
          </View>
        </View>
      </View>

      {weatherData && weatherData.forecast && (
        <View style={styles.forecastSection}>
          <Text style={styles.sectionTitle}>7-Day Forecast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.entries(weatherData.forecast).map(([date, data]: [string, any]) => (
              <View key={date} style={styles.forecastCard}>
                <Text style={styles.forecastDate}>
                  {new Date(date).toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })}
                </Text>
                <Ionicons 
                  name={getWeatherIcon(data.condition) as any} 
                  size={32} 
                  color={colors.primary} 
                />
                <Text style={styles.forecastTemp}>
                  {data.temperature.min}° - {data.temperature.max}°
                </Text>
                <Text style={styles.forecastCondition}>{data.condition}</Text>
                <View style={styles.forecastDetails}>
                  <View style={styles.forecastDetail}>
                    <Ionicons name="water" size={12} color={colors.info} />
                    <Text style={styles.forecastDetailText}>{data.rainfall}mm</Text>
                  </View>
                  <View style={styles.forecastDetail}>
                    <Ionicons name="flag" size={12} color={colors.textLight} />
                    <Text style={styles.forecastDetailText}>{data.windSpeed}km/h</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {alerts.length > 0 && (
        <View style={styles.alertsSection}>
          <Text style={styles.sectionTitle}>Weather Alerts</Text>
          {alerts.map((alert, index) => (
            <View key={index} style={[
              styles.alertCard,
              alert.type === 'warning' ? styles.warningAlert : styles.infoAlert
            ]}>
              <Ionicons 
                name={alert.type === 'warning' ? 'warning' : 'information-circle'} 
                size={20} 
                color={alert.type === 'warning' ? colors.warning : colors.info} 
              />
              <Text style={styles.alertText}>{alert.message}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: '#fff',
  },
  subtitle: {
    ...typography.body2,
    color: '#fff',
    marginTop: spacing.xs,
  },
  sectionTitle: {
    ...typography.h4,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  regionSelector: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  regionButton: {
    backgroundColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  selectedRegionButton: {
    backgroundColor: colors.primary,
  },
  regionButtonText: {
    ...typography.caption,
    color: colors.text,
  },
  selectedRegionButtonText: {
    color: '#fff',
  },
  monthSelector: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  monthButton: {
    backgroundColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  selectedMonthButton: {
    backgroundColor: colors.primary,
  },
  monthButtonText: {
    ...typography.caption,
    color: colors.text,
  },
  selectedMonthButtonText: {
    color: '#fff',
  },
  weatherSection: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  weatherCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  weatherLabel: {
    ...typography.body2,
    marginLeft: spacing.sm,
    flex: 1,
  },
  weatherValue: {
    ...typography.body2,
    fontWeight: 'bold',
  },
  calendarSection: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  calendarCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
  },
  calendarHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
  },
  calendarHeaderText: {
    ...typography.body1,
    fontWeight: 'bold',
    flex: 1,
  },
  calendarRow: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  calendarActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  calendarActivityText: {
    ...typography.body2,
    marginLeft: spacing.sm,
  },
  calendarCrops: {
    flex: 1,
  },
  calendarCropText: {
    ...typography.body2,
    marginBottom: 2,
  },
  noCropsText: {
    ...typography.body2,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  forecastSection: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  forecastCard: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 8,
    marginRight: spacing.sm,
    alignItems: 'center',
    minWidth: 100,
  },
  forecastDate: {
    ...typography.caption,
    marginBottom: spacing.xs,
  },
  forecastTemp: {
    ...typography.body2,
    fontWeight: 'bold',
    marginVertical: spacing.xs,
  },
  forecastCondition: {
    ...typography.caption,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  forecastDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  forecastDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forecastDetailText: {
    ...typography.caption,
    marginLeft: 2,
  },
  alertsSection: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: spacing.lg,
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 8,
    marginBottom: spacing.xs,
  },
  warningAlert: {
    borderLeftWidth: 3,
    borderLeftColor: colors.warning,
  },
  infoAlert: {
    borderLeftWidth: 3,
    borderLeftColor: colors.info,
  },
  alertText: {
    ...typography.body2,
    marginLeft: spacing.sm,
    flex: 1,
  },
});

export default WeatherCalendarScreen;