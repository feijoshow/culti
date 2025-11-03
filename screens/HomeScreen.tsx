// app/screens/HomeScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { regions } from '../lib/data/regions';
import { getCommonName, getCropsForCurrentMonth } from '../lib/data/utils';
import { colors, spacing, typography } from '../lib/theme';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [recommendedCrops, setRecommendedCrops] = useState<any[]>([]);

  useEffect(() => {
    // Load recommended crops for the selected region
    const crops = getCropsForCurrentMonth(selectedRegion);
    setRecommendedCrops(crops.slice(0, 3)); // Show only top 3
  }, [selectedRegion]);

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'cropDoctor':
        navigation.navigate('CropDoctor');
        break;
      case 'weather':
        navigation.navigate('Weather');
        break;
      case 'planning':
        navigation.navigate('Planning');
        break;
      case 'chat':
        navigation.navigate('Chat');
        break;
      default:
        Alert.alert('Action', `You pressed ${action}`);
    }
  };

  const navigateToCropDetail = (crop: any) => {
    navigation.navigate('CropDetail', { crop });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AgriAI Pro</Text>
        <Text style={styles.subtitle}>Your Digital Farming Assistant</Text>
      </View>

      <View style={styles.regionSelector}>
        <Text style={styles.sectionTitle}>Your Region:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {regions.map(region => (
            <TouchableOpacity
              key={region}
              style={[
                styles.regionButton,
                selectedRegion === region && styles.selectedRegionButton
              ]}
              onPress={() => setSelectedRegion(region)}
            >
              <Text style={[
                styles.regionButtonText,
                selectedRegion === region && styles.selectedRegionButtonText
              ]}>
                {region.replace(' Production Zone', '')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction('cropDoctor')}
          >
            <Ionicons name="medkit" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Crop Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction('weather')}
          >
            <Ionicons name="cloud" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction('planning')}
          >
            <Ionicons name="calculator" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Planning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleQuickAction('chat')}
          >
            <Ionicons name="chatbubbles" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Recommended Crops for This Month</Text>
        {recommendedCrops.length > 0 ? (
          recommendedCrops.map((crop, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cropCard}
              onPress={() => navigateToCropDetail(crop)}
            >
              <View style={styles.cropInfo}>
                <Text style={styles.cropName}>{getCommonName(crop.scientificName)}</Text>
                <Text style={styles.cropScientific}>{crop.scientificName}</Text>
                <Text style={styles.cropDescription}>
                  Planting: {crop.plantingHarvestingDates[selectedRegion]?.planting || 'N/A'}
                </Text>
                <Text style={styles.cropDescription}>
                  Harvesting: {crop.plantingHarvestingDates[selectedRegion]?.harvesting || 'N/A'}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noCropsMessage}>
            No crops recommended for this month in your region.
          </Text>
        )}
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Farming Tips</Text>
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={24} color={colors.warning} />
          <Text style={styles.tipText}>
            Remember to adjust your irrigation schedule based on the current rainfall patterns in your region.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Ionicons name="bulb" size={24} color={colors.warning} />
          <Text style={styles.tipText}>
            Regular soil testing can help optimize fertilizer use and improve crop yields.
          </Text>
        </View>
      </View>
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
    ...typography.h1,
    color: '#fff',
  },
  subtitle: {
    ...typography.body1,
    color: '#fff',
    marginTop: spacing.xs,
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
  sectionTitle: {
    ...typography.h4,
    marginBottom: spacing.sm,
    color: colors.text,
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
  quickActions: {
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
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    width: width * 0.2,
  },
  actionButtonText: {
    ...typography.caption,
    marginTop: spacing.xs,
    textAlign: 'center',
    color: colors.text,
  },
  featuredSection: {
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
  cropCard: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    ...typography.h4,
    color: colors.text,
  },
  cropScientific: {
    ...typography.caption,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  cropDescription: {
    ...typography.body2,
    marginTop: spacing.xs,
    color: colors.text,
  },
  noCropsMessage: {
    ...typography.body2,
    textAlign: 'center',
    padding: spacing.lg,
    color: colors.textLight,
  },
  tipsSection: {
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
  tipCard: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    alignItems: 'flex-start',
  },
  tipText: {
    ...typography.body2,
    marginLeft: spacing.sm,
    flex: 1,
    color: colors.text,
  },

  
});

export default HomeScreen;