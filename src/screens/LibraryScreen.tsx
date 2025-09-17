import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../lib/types';
import {usePdfLibrary} from '../hooks/usePdfLibrary';
import {FileRow} from '../components/FileRow';
import {EmptyState} from '../components/EmptyState';
import {pickPdfDocument} from '../lib/picker';

type LibraryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Library'
>;

export const LibraryScreen: React.FC = () => {
  const navigation = useNavigation<LibraryScreenNavigationProp>();
  const {pdfs, loading, error, importPdf, deletePdf} = usePdfLibrary();

  const handleImportPdf = async () => {
    try {
      const pickedDoc = await pickPdfDocument();
      if (pickedDoc) {
        await importPdf(pickedDoc.uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to import PDF');
    }
  };

  const handlePdfPress = (pdfPath: string, pdfName: string) => {
    navigation.navigate('Reader', {pdfPath, pdfName});
  };

  const handleDeletePdf = (pdfPath: string, pdfName: string) => {
    Alert.alert(
      'Delete PDF',
      `Are you sure you want to delete "${pdfName}"?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deletePdf(pdfPath),
        },
      ]
    );
  };

  const renderPdfItem = ({item}: {item: any}) => (
    <FileRow
      fileName={item.name}
      fileSize={`${(item.size / 1024 / 1024).toFixed(1)} MB`}
      onPress={() => handlePdfPress(item.path, item.name)}
      onDelete={() => handleDeletePdf(item.path, item.name)}
    />
  );

  if (pdfs.length === 0 && !loading) {
    return (
      <View style={styles.container}>
        <EmptyState
          title="No PDFs Found"
          subtitle="Import your first PDF to get started"
        />
        <TouchableOpacity style={styles.importButton} onPress={handleImportPdf}>
          <Text style={styles.importButtonText}>Import PDF</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pdfs}
        renderItem={renderPdfItem}
        keyExtractor={item => item.path}
        style={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={handleImportPdf}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  importButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  importButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
