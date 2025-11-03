// app/screens/CalculatorScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  calculateFertilizerRequirement,
  calculateIrrigationRequirement,
  calculateSeedRequirement,
  calculateYieldEstimate,
  getCommonName
} from '../lib/data/utils';
import { colors, spacing, typography } from '../lib/theme';

const CalculatorScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { crop, type } = route.params as { crop: any, type: string };

  const [fieldSize, setFieldSize] = useState('');
  const [result, setResult] = useState<any>(null);

  const commonName = getCommonName(crop.scientificName);

  const handleCalculate = () => {
    if (!fieldSize || isNaN(Number(fieldSize)) || Number(fieldSize) <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid field size in square meters.');
      return;
    }

    const size = Number(fieldSize);
    let calculationResult;

    switch (type) {
      case 'seed':
        calculationResult = {
          label: 'Seed Requirement',
          value: calculateSeedRequirement(commonName, size),
          unit: 'kg',
          description: `Total seeds needed for ${size} m²`
        };
        break;
      case 'fertilizer':
        calculationResult = {
          label: 'Fertilizer Requirement',
          value: {
            N: calculateFertilizerRequirement(commonName, size, 'N'),
            P: calculateFertilizerRequirement(commonName, size, 'P'),
            K: calculateFertilizerRequirement(commonName, size, 'K'),
          },
          unit: 'kg',
          description: `Total nutrients needed for ${size} m²`
        };
        break;
      case 'irrigation':
        calculationResult = {
          label: 'Irrigation Requirement',
          value: calculateIrrigationRequirement(commonName, size),
          unit: 'mm',
          description: `Total water needed for the season for ${size} m²`
        };
        break;
      case 'yield':
        calculationResult = {
          label: 'Yield Estimate',
          value: calculateYieldEstimate(commonName, size),
          unit: 'tons',
          description: `Estimated yield for ${size} m²`
        };
        break;
      default:
        calculationResult = null;
    }

    setResult(calculationResult);
  };

  const renderSection = (title: string, children: React.ReactNode) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const getCalculatorTitle = () => {
    switch (type) {
      case 'seed':
        return 'Seed Calculator';
      case 'fertilizer':
        return 'Fertilizer Calculator';
      case 'irrigation':
        return 'Irrigation Calculator';
      case 'yield':
        return 'Yield Estimator';
      default:
        return 'Calculator';
    }
  };

  const getCalculatorIcon = () => {
    switch (type) {
      case 'seed':
        return 'leaf';
      case 'fertilizer':
        return 'flask';
      case 'irrigation':
        return 'water';
      case 'yield':
        return 'trending-up';
      default:
        return 'calculator';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name={getCalculatorIcon() as any} size={32} color="#fff" />
        <Text style={styles.title}>{getCalculatorTitle()}</Text>
        <Text style={styles.subtitle}>{commonName}</Text>
      </View>

      {renderSection('Field Information', (
        <View>
          <Text style={styles.inputLabel}>Field Size (m²)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter field size in square meters"
            value={fieldSize}
            onChangeText={setFieldSize}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
        </View>
      ))}

      {result && (
        renderSection('Results', (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>{result.label}</Text>
            <Text style={styles.resultDescription}>{result.description}</Text>
            
            {type === 'fertilizer' ? (
              <View style={styles.nutrientResults}>
                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>Nitrogen (N):</Text>
                  <Text style={styles.nutrientValue}>{result.value.N.toFixed(2)} {result.unit}</Text>
                </View>
                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>Phosphorus (P):</Text>
                  <Text style={styles.nutrientValue}>{result.value.P.toFixed(2)} {result.unit}</Text>
                </View>
                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>Potassium (K):</Text>
                  <Text style={styles.nutrientValue}>{result.value.K.toFixed(2)} {result.unit}</Text>
                </View>
              </View>
            ) : type === 'yield' ? (
              <View style={styles.yieldResults}>
                <View style={styles.yieldRow}>
                  <Text style={styles.yieldLabel}>Minimum Yield:</Text>
                  <Text style={styles.yieldValue}>{result.value.min.toFixed(2)} {result.unit}</Text>
                </View>
                <View style={styles.yieldRow}>
                  <Text style={styles.yieldLabel}>Maximum Yield:</Text>
                  <Text style={styles.yieldValue}>{result.value.max.toFixed(2)} {result.unit}</Text>
                </View>
              </View>
            ) : (
              <Text style={styles.resultValue}>{result.value.toFixed(2)} {result.unit}</Text>
            )}
          </View>
        ))
      )}

      {renderSection('Information', (
        <View>
          {type === 'seed' && (
            <Text style={styles.infoText}>
              This calculation is based on the recommended seed rate of {crop.kgOfSeedRequiredPerHectare} kg per hectare for {commonName}.
            </Text>
          )}
          {type === 'fertilizer' && (
            <Text style={styles.infoText}>
              This calculation is based on the recommended nutrient application rates per hectare for {commonName}.
            </Text>
          )}
          {type === 'irrigation' && (
            <Text style={styles.infoText}>
              This calculation is based on the total water requirement of {crop.irrigationWaterRequirement.totalWaterRequirementPerSeason}mm per season for {commonName}.
            </Text>
          )}
          {type === 'yield' && (
            <Text style={styles.infoText}>
              This is an estimated yield range based on the typical yield of {crop.population.tonsPerHa} tons per hectare for {commonName}.
            </Text>
          )}
        </View>
      ))}
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
    marginTop: spacing.sm,
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
  inputLabel: {
    ...typography.body2,
    marginBottom: spacing.xs,
    color: colors.text,
  },
  textInput: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },
  calculateButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 4,
    alignItems: 'center',
  },
  calculateButtonText: {
    ...typography.body1,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
  },
  resultLabel: {
    ...typography.h4,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  resultDescription: {
    ...typography.body2,
    marginBottom: spacing.md,
    color: colors.textLight,
  },
  resultValue: {
    ...typography.h3,
    textAlign: 'center',
    color: colors.primary,
  },
  nutrientResults: {
    marginTop: spacing.sm,
  },
  nutrientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  nutrientLabel: {
    ...typography.body2,
    color: colors.text,
  },
  nutrientValue: {
    ...typography.body2,
    fontWeight: 'bold',
    color: colors.text,
  },
  yieldResults: {
    marginTop: spacing.sm,
  },
  yieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  yieldLabel: {
    ...typography.body2,
    color: colors.text,
  },
  yieldValue: {
    ...typography.body2,
    fontWeight: 'bold',
    color: colors.text,
  },
  infoText: {
    ...typography.body2,
    color: colors.textLight,
    fontStyle: 'italic',
  },
});

export default CalculatorScreen;