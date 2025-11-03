// app/screens/PlanningToolsScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

import { crops } from '../lib/data/crops';
import { getCommonName } from '../lib/data/utils';
import { colors, spacing, typography } from '../lib/theme';

const PlanningToolsScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedTool, setSelectedTool] = useState('seed');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [fieldSize, setFieldSize] = useState('');

  const tools = [
    { id: 'seed', name: 'Seed Calculator', icon: 'leaf' },
    { id: 'fertilizer', name: 'Fertilizer Calculator', icon: 'flask' },
    { id: 'irrigation', name: 'Irrigation Calculator', icon: 'water' },
    { id: 'yield', name: 'Yield Estimator', icon: 'trending-up' },
  ];

  const handleCalculate = () => {
    if (!selectedCrop) {
      Alert.alert('Missing Information', 'Please select a crop.');
      return;
    }

    if (!fieldSize || isNaN(Number(fieldSize)) || Number(fieldSize) <= 0) {
      Alert.alert('Missing Information', 'Please enter a valid field size.');
      return;
    }

    const crop = crops.find(c => getCommonName(c.scientificName) === selectedCrop);
    if (!crop) return;

    navigation.navigate('Calculator', { crop, type: selectedTool });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Planning Tools</Text>
        <Text style={styles.subtitle}>Calculate your farming requirements</Text>
      </View>

      <View style={styles.toolsSection}>
        <Text style={styles.sectionTitle}>Select Tool</Text>
        <View style={styles.toolsContainer}>
          {tools.map(tool => (
            <TouchableOpacity
              key={tool.id}
              style={[
                styles.toolButton,
                selectedTool === tool.id && styles.selectedToolButton
              ]}
              onPress={() => setSelectedTool(tool.id)}
            >
              <Ionicons name={tool.icon as any} size={24} color={selectedTool === tool.id ? '#fff' : colors.primary} />
              <Text style={[
                styles.toolButtonText,
                selectedTool === tool.id && styles.selectedToolButtonText
              ]}>
                {tool.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>Input Parameters</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Select Crop</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {crops.map(crop => {
              const commonName = getCommonName(crop.scientificName);
              return (
                <TouchableOpacity
                  key={crop.scientificName}
                  style={[
                    styles.cropButton,
                    selectedCrop === commonName && styles.selectedCropButton
                  ]}
                  onPress={() => setSelectedCrop(commonName)}
                >
                  <Text style={[
                    styles.cropButtonText,
                    selectedCrop === commonName && styles.selectedCropButtonText
                  ]}>
                    {commonName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Field Size (m²)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter field size in square meters"
            value={fieldSize}
            onChangeText={setFieldSize}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
          <Ionicons name="calculator" size={20} color="#fff" />
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Tool Information</Text>
        {selectedTool === 'seed' && (
          <View style={styles.infoCard}>
            <Ionicons name="leaf" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Seed Calculator</Text>
            <Text style={styles.infoText}>
              Calculate the exact amount of seeds needed for your field based on the recommended seeding rate per hectare.
            </Text>
          </View>
        )}
        {selectedTool === 'fertilizer' && (
          <View style={styles.infoCard}>
            <Ionicons name="flask" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Fertilizer Calculator</Text>
            <Text style={styles.infoText}>
              Determine the required amounts of Nitrogen (N), Phosphorus (P), and Potassium (K) for optimal crop growth.
            </Text>
          </View>
        )}
        {selectedTool === 'irrigation' && (
          <View style={styles.infoCard}>
            <Ionicons name="water" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Irrigation Calculator</Text>
            <Text style={styles.infoText}>
              Calculate total water requirements for the season based on crop needs and local conditions.
            </Text>
          </View>
        )}
        {selectedTool === 'yield' && (
          <View style={styles.infoCard}>
            <Ionicons name="trending-up" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Yield Estimator</Text>
            <Text style={styles.infoText}>
              Estimate potential yield range based on typical productivity per hectare for the selected crop.
            </Text>
          </View>
        )}
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
  },
  sectionTitle: {
    ...typography.h4,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  toolsSection: {
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
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  toolButton: {
    width: '48%',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  selectedToolButton: {
    backgroundColor: colors.primary,
  },
  toolButtonText: {
    ...typography.caption,
    marginTop: spacing.xs,
    color: colors.text,
  },
  selectedToolButtonText: {
    color: '#fff',
  },
  inputSection: {
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
  inputGroup: {
    marginBottom: spacing.md,
  },
  inputLabel: {
    ...typography.body2,
    marginBottom: spacing.xs,
    color: colors.text,
  },
  cropButton: {
    backgroundColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  selectedCropButton: {
    backgroundColor: colors.primary,
  },
  cropButtonText: {
    ...typography.caption,
    color: colors.text,
  },
  selectedCropButtonText: {
    color: '#fff',
  },
  textInput: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: spacing.sm,
  },
  calculateButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: 8,
  },
  calculateButtonText: {
    ...typography.body1,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },
  infoSection: {
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
  infoCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoTitle: {
    ...typography.h4,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    color: colors.text,
  },
  infoText: {
    ...typography.body2,
    textAlign: 'center',
    color: colors.textLight,
  },
});

export default PlanningToolsScreen;