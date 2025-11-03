// app/screens/DiseaseDetailScreen.tsx
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

import { colors, spacing, typography } from '../lib/theme';

const DiseaseDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { disease } = route.params as { disease: any };

  const renderSection = (title: string, icon: string, items: string[]) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name={icon as any} size={20} color={colors.primary} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {items.map((item, index) => (
        <View key={index} style={styles.itemRow}>
          <Text style={styles.itemBullet}>•</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );

  const handleShare = () => {
    Alert.alert(
      'Share Disease Information',
      'Would you like to share this disease information with other farmers?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Share', onPress: () => console.log('Sharing disease info') },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{disease.name}</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton} onPress={handleShare}>
            <Ionicons name="share" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.affectedCropsSection}>
        <Text style={styles.sectionTitle}>Affected Crops</Text>
        <View style={styles.cropsContainer}>
          {disease.affectedCrops.map((crop: string, index: number) => (
            <View key={index} style={styles.cropTag}>
              <Text style={styles.cropTagText}>{crop}</Text>
            </View>
          ))}
        </View>
      </View>

      {renderSection('Symptoms', 'alert-circle', disease.symptoms)}
      {renderSection('Treatment', 'medkit', disease.treatment)}
      {renderSection('Prevention', 'shield-checkmark', disease.prevention)}

      <View style={styles.actionSection}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('CropDoctor')}
        >
          <Ionicons name="camera" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Scan Another Plant</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => navigation.navigate('Chat')}
        >
          <Ionicons name="chatbubbles" size={20} color={colors.primary} />
          <Text style={[styles.actionButtonText, { color: colors.primary }]}>
            Ask Expert
          </Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: '#fff',
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    padding: spacing.sm,
  },
  affectedCropsSection: {
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
  cropsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cropTag: {
    backgroundColor: colors.background,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 16,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  cropTagText: {
    ...typography.caption,
    color: colors.text,
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
    alignItems: 'flex-start',
  },
  itemBullet: {
    ...typography.body1,
    color: colors.primary,
    marginRight: spacing.sm,
    marginTop: 2,
  },
  itemText: {
    ...typography.body2,
    flex: 1,
    color: colors.text,
  },
  actionSection: {
    padding: spacing.md,
    margin: spacing.sm,
  },
  actionButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  actionButtonText: {
    ...typography.body1,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },
});

export default DiseaseDetailScreen;