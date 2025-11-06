import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { diseases } from "../../lib/data/diseases";
import { Disease } from "../../lib/data/types/disease";

export default function CropDoctorScreen() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<Disease | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Sorry, we need camera roll permission to select images.");
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
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Sorry, we need camera permission to take photos.");
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

  const analyzeImage = (imageUri: string) => {
    setLoading(true);
    
    setTimeout(() => {
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      setDiagnosis(randomDisease);
      setLoading(false);
    }, 2000);
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
      Alert.alert("No Results", "No diseases found matching your search.");
    }
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
            <Ionicons name="camera" size={50} color="#ccc" />
            <Text style={styles.placeholderText}>Take a photo or select an image</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionButton} onPress={takePhoto}>
                <Ionicons name="camera" size={20} color="#4CAF50" />
                <Text style={styles.actionButtonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={pickImage}>
                <Ionicons name="image" size={20} color="#4CAF50" />
                <Text style={styles.actionButtonText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Analyzing image...</Text>
        </View>
      )}

      {diagnosis && (
        <View style={styles.diagnosisSection}>
          <Text style={styles.sectionTitle}>Diagnosis Results</Text>
          <View style={styles.diagnosisCard}>
            <TouchableOpacity
              onPress={() => router.push({ 
                pathname: "/disease-detail", 
                params: { diseaseName: diagnosis.name } 
              })}
            >
              <Text style={styles.diseaseName}>{diagnosis.name}</Text>
            </TouchableOpacity>
            <Text style={styles.diseaseType}>Type: {diagnosis.type}</Text>
            
            <Text style={styles.diagnosisSubtitle}>Symptoms:</Text>
            {diagnosis.symptoms.map((symptom: string, index: number) => (
              <Text key={index} style={styles.symptomText}>• {symptom}</Text>
            ))}
            
            <Text style={styles.diagnosisSubtitle}>Treatment:</Text>
            {diagnosis.treatment.map((treatment: string, index: number) => (
              <Text key={index} style={styles.treatmentText}>• {treatment}</Text>
            ))}
            
            <Text style={styles.diagnosisSubtitle}>Prevention:</Text>
            {diagnosis.prevention.map((prevention: string, index: number) => (
              <Text key={index} style={styles.preventionText}>• {prevention}</Text>
            ))}
          </View>
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
                onPress={() => setDiagnosis(disease)}
              >
                <Text style={styles.diseaseCardName}>{disease.name}</Text>
                <Text style={styles.diseaseCardType}>{disease.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
  imageSection: {
    padding: 20,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  selectedImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  analyzeButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  analyzeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imagePlaceholder: {
    alignItems: "center",
    padding: 30,
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  actionButtonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#4CAF50",
  },
  diagnosisSection: {
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
  diagnosisCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  diseaseName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#4CAF50",
  },
  diseaseType: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  diagnosisSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  symptomText: {
    fontSize: 14,
    marginBottom: 3,
  },
  treatmentText: {
    fontSize: 14,
    marginBottom: 3,
  },
  preventionText: {
    fontSize: 14,
    marginBottom: 3,
  },
  searchSection: {
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  searchResults: {
    marginTop: 15,
  },
  diseaseCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  diseaseCardName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  diseaseCardType: {
    fontSize: 14,
    color: "#666",
  },
});