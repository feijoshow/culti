// app/screens/CropDoctorScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { analyzeImageWithAI } from '../lib/api';
import { diseases } from '../lib/data/diseases';
import { colors, spacing, typography } from '../lib/theme';

const CropDoctorScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permission to select images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      analyzeImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera permission to take photos.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      analyzeImage(result.assets[0].uri);
    }
  };

  const analyzeImage = async (imageUri: string) => {
    setLoading(true);
    try {
      // Prefer the real API; fallback handled inside analyzeImageWithAI
      const result = await analyzeImageWithAI(imageUri);
      // If API returns a disease-like object, use it; otherwise try to map fields
      setDiagnosis(result || diseases[Math.floor(Math.random() * diseases.length)]);
    } catch (err: any) {
      // On error, fall back to local random disease and show brief alert
      Alert.alert('Analysis Error', err?.message ?? 'Unable to analyze image. Showing local sample.');
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      setDiagnosis(randomDisease);
    } finally {
      setLoading(false);
    }
  };

  const searchDiseases = () => {
    if (!searchQuery.trim()) return;
    
    const results = diseases.filter(disease => 
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.symptoms.some(symptom => 
        symptom.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    if (results.length > 0) {
      setDiagnosis(results[0]);
    } else {
      Alert.alert('No Results', 'No diseases found matching your search.');
    }
  };

  const navigateToDiseaseDetail = (disease: any) => {
    navigation.navigate('DiseaseDetail', { disease });
  };

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crop Doctor</Text>
        <Text style={styles.subtitle}>Identify diseases and get treatment advice</Text>
      </View>

      <View style={styles.imageSection}>
        {selectedImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            <TouchableOpacity
              style={styles.analyzeButton}
              onPress={() => analyzeImage(selectedImage)}
            >
              <Text style={styles.analyzeButtonText}>Analyze Again</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imagePlaceholder}>
            <Ionicons name="camera" size={50} color={colors.textLight} />
            <Text style={styles.placeholderText}>Take a photo or select an image</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionButton} onPress={takePhoto}>
                <Ionicons name="camera" size={20} color={colors.primary} />
                <Text style={styles.actionButtonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={pickImage}>
                <Ionicons name="image" size={20} color={colors.primary} />
                <Text style={styles.actionButtonText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Analyzing image...</Text>
        </View>
      )}

      {diagnosis && (
        <View style={styles.diagnosisSection}>
          <Text style={styles.sectionTitle}>Diagnosis Results</Text>
          <TouchableOpacity 
            style={styles.diagnosisCard}
            onPress={() => navigateToDiseaseDetail(diagnosis)}
          >
            <View style={styles.diagnosisHeader}>
              <Text style={styles.diseaseName}>{diagnosis.name}</Text>
              <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
            </View>
            
            <Text style={styles.diagnosisSubtitle}>Symptoms:</Text>
            {diagnosis.symptoms.slice(0, 2).map((symptom: string, index: number) => (
              <Text key={index} style={styles.symptomText}>• {symptom}</Text>
            ))}
            {diagnosis.symptoms.length > 2 && (
              <Text style={styles.moreText}>...and {diagnosis.symptoms.length - 2} more</Text>
            )}
            
            <Text style={styles.diagnosisSubtitle}>Quick Treatment:</Text>
            {diagnosis.treatment.slice(0, 2).map((treatment: string, index: number) => (
              <Text key={index} style={styles.treatmentText}>• {treatment}</Text>
            ))}
            {diagnosis.treatment.length > 2 && (
              <Text style={styles.moreText}>...and {diagnosis.treatment.length - 2} more</Text>
            )}
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Search Diseases</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by disease name or symptoms..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={searchDiseases}
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchDiseases}>
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        {searchQuery && (
          <View style={styles.searchResults}>
            {filteredDiseases.map((disease, index) => (
              <TouchableOpacity
                key={index}
                style={styles.diseaseCard}
                onPress={() => {
                  setDiagnosis(disease);
                  setSearchQuery('');
                }}
              >
                <View style={styles.diseaseInfo}>
                  <Text style={styles.diseaseCardName}>{disease.name}</Text>
                  <Text style={styles.diseaseCardSymptoms}>
                    {disease.symptoms[0]}...
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={colors.textLight} />
              </TouchableOpacity>
            ))}
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
  imageSection: {
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
  imageContainer: {
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: spacing.md,
  },
  analyzeButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 4,
  },
  analyzeButtonText: {
    ...typography.body1,
    color: 'white',
    fontWeight: 'bold',
  },
  imagePlaceholder: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  placeholderText: {
    ...typography.body1,
    color: colors.textLight,
    marginVertical: spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 4,
  },
  actionButtonText: {
    ...typography.body2,
    marginLeft: spacing.xs,
  },
  loadingContainer: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  loadingText: {
    ...typography.body1,
    color: colors.primary,
    marginTop: spacing.sm,
  },
  diagnosisSection: {
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
  diagnosisCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
  },
  diagnosisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  diseaseName: {
    ...typography.h3,
    color: colors.primary,
  },
  diagnosisSubtitle: {
    ...typography.body1,
    fontWeight: 'bold',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    color: colors.text,
  },
  symptomText: {
    ...typography.body2,
    marginBottom: 2,
    color: colors.text,
  },
  treatmentText: {
    ...typography.body2,
    marginBottom: 2,
    color: colors.text,
  },
  moreText: {
    ...typography.caption,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  searchSection: {
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: spacing.sm,
    marginRight: spacing.sm,
  },
  searchButton: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: 4,
  },
  searchResults: {
    marginTop: spacing.md,
  },
  diseaseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 4,
    marginBottom: spacing.xs,
  },
  diseaseInfo: {
    flex: 1,
  },
  diseaseCardName: {
    ...typography.body1,
    fontWeight: 'bold',
    color: colors.text,
  },
  diseaseCardSymptoms: {
    ...typography.caption,
    color: colors.textLight,
  },
});

export default CropDoctorScreen;