import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';

export const SettingsScreen: React.FC = () => {
  const [autoRotate, setAutoRotate] = React.useState(false);
  const [showPageNumbers, setShowPageNumbers] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reading</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Auto Rotate</Text>
            <Switch
              value={autoRotate}
              onValueChange={setAutoRotate}
            />
          </View>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Show Page Numbers</Text>
            <Switch
              value={showPageNumbers}
              onValueChange={setShowPageNumbers}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Storage</Text>
          
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Clear Cache</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Export PDFs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          
          <Text style={styles.aboutText}>PDF Reader v1.0.0</Text>
          <Text style={styles.aboutText}>Built with React Native</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
  },
  settingButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});
