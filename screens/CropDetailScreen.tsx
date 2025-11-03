// app/screens/CropDetailScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { getCommonName, getDiseasesByCrop } from '../lib/data/utils';
import { colors, spacing, typography } from '../lib/theme';

const CropDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { crop } = route.params as { crop: any };

  const navigateToDiseaseDetail = (disease: any) => {
    navigation.navigate('DiseaseDetail', { disease });
  };

  const navigateToCalculator = (type: string) => {
    navigation.navigate('Calculator', { crop, type });
  };

  const renderSection = (title: string, children: React.ReactNode) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const renderInfoRow = (label: string, value: string) => (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  const commonName = getCommonName(crop.scientificName);
  const diseases = getDiseasesByCrop(commonName);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{commonName}</Text>
        <Text style={styles.subtitle}>{crop.scientificName}</Text>
      </View>

      {renderSection('Basic Information', (
        <>
          {renderInfoRow('Seeds per kg', crop.seedsPerKg.toString())}
          {renderInfoRow('Seed required per hectare', `${crop.kgOfSeedRequiredPerHectare} kg`)}
          {renderInfoRow('Sowing depth', crop.sowingDepth)}
          {renderInfoRow('Soil pH', crop.soilPH)}
        </>
      ))}

      {renderSection('Plant Spacing', (
        <>
          {renderInfoRow('Intra-row spacing', crop.plantSpacing.intraRows)}
          {renderInfoRow('Inter-row spacing', crop.plantSpacing.interRows)}
        </>
      ))}

      {renderSection('Growth Conditions', (
        <>
          {renderInfoRow('Optimum germination temperature', `${crop.germination.optimumAirTemperature}°C`)}
          {renderInfoRow('Germination period', `${crop.germination.averageDays} days`)}
          {renderInfoRow('Optimum growth temperature', crop.optimumGrowthTemperature)}
          {renderInfoRow('Growth period', crop.growthPeriod.daysFromPlantingToMaturity)}
          {renderInfoRow('Harvest time', crop.growthPeriod.harvestTime)}
        </>
      ))}

      {renderSection('Yield', (
        <>
          {renderInfoRow('Population', crop.population.plantsPerHa)}
          {renderInfoRow('Yield per hectare', `${crop.population.tonsPerHa} tons`)}
        </>
      ))}

      {renderSection('Water Requirements', (
        <>
          {renderInfoRow('Total water requirement', `${crop.irrigationWaterRequirement.totalWaterRequirementPerSeason}mm`)}
          {renderInfoRow('First part of season', `${crop.irrigationWaterRequirement.firstPartOfSeason}mm/week`)}
          {renderInfoRow('Second part of season', `${crop.irrigationWaterRequirement.secondPartOfSeason}mm/week`)}
        </>
      ))}

      {renderSection('Nutrient Requirements (kg/ha)', (
        <>
          {renderInfoRow('Nitrogen (N)', crop.macroElements.kgPerHectare.N.toString())}
          {renderInfoRow('Phosphorus (P)', crop.macroElements.kgPerHectare.P.toString())}
          {renderInfoRow('Potassium (K)', crop.macroElements.kgPerHectare.K.toString())}
        </>
      ))}

      {renderSection('Leaf Analysis Norms', (
        <>
          {renderInfoRow('Nitrogen (N)', crop.macroElements.leafTestNorms.N.toString())}
          {renderInfoRow('Phosphorus (P)', crop.macroElements.leafTestNorms.P.toString())}
          {renderInfoRow('Potassium (K)', crop.macroElements.leafTestNorms.K.toString())}
        </>
      ))}

      {crop.sensitiveToDeficiencyOfMicroelements.length > 0 && renderSection('Microelement Deficiencies', (
        <Text style={styles.infoValue}>{crop.sensitiveToDeficiencyOfMicroelements.join(', ')}</Text>
      ))}

      {crop.importantDiseasesInNamibia.length > 0 && renderSection('Common Diseases', (
        crop.importantDiseasesInNamibia.map((disease: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.diseaseItem}
            onPress={() => {
              const diseaseDetail = diseases.find(d => d.name === disease);
              if (diseaseDetail) {
                navigateToDiseaseDetail(diseaseDetail);
              } else {
                Alert.alert('Disease Details', `No detailed information available for ${disease}`);
              }
            }}
          >
            <Text style={styles.diseaseName}>{disease}</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.textLight} />
          </TouchableOpacity>
        ))
      ))}

      {crop.importantPestsInNamibia.length > 0 && renderSection('Common Pests', (
        <Text style={styles.infoValue}>{crop.importantPestsInNamibia.join(', ')}</Text>
      ))}

      <View style={styles.calculatorSection}>
        <Text style={styles.sectionTitle}>Calculators</Text>
        <View style={styles.calculatorButtons}>
          <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => navigateToCalculator('seed')}
          >
            <Ionicons name="leaf" size={24} color={colors.primary} />
            <Text style={styles.calculatorButtonText}>Seed Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => navigateToCalculator('fertilizer')}
          >
            <Ionicons name="flask" size={24} color={colors.primary} />
            <Text style={styles.calculatorButtonText}>Fertilizer Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => navigateToCalculator('irrigation')}
          >
            <Ionicons name="water" size={24} color={colors.primary} />
            <Text style={styles.calculatorButtonText}>Irrigation Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => navigateToCalculator('yield')}
          >
            <Ionicons name="trending-up" size={24} color={colors.primary} />
            <Text style={styles.calculatorButtonText}>Yield Estimator</Text>
          </TouchableOpacity>
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
    ...typography.h2,
    color: '#fff',
  },
  subtitle: {
    ...typography.body2,
    color: '#fff',
    marginTop: spacing.xs,
    fontStyle: 'italic',
  },
  section: {
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
  infoRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  infoLabel: {
    ...typography.body2,
    flex: 1,
    color: colors.textLight,
  },
  infoValue: {
    ...typography.body2,
    flex: 2,
    color: colors.text,
  },
  diseaseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  diseaseName: {
    ...typography.body2,
    color: colors.text,
  },
  calculatorSection: {
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
  calculatorButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calculatorButton: {
    width: '48%',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  calculatorButtonText: {
    ...typography.caption,
    marginTop: spacing.xs,
    textAlign: 'center',
    color: colors.text,
  },
});

export default CropDetailScreen;