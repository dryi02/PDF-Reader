import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../lib/types';
import {PdfViewer} from '../components/PdfViewer';

type ReaderScreenRouteProp = RouteProp<RootStackParamList, 'Reader'>;

export const ReaderScreen: React.FC = () => {
  const route = useRoute<ReaderScreenRouteProp>();
  const {pdfPath, pdfName} = route.params;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleLoadComplete = (numberOfPages: number, filePath: string) => {
    setTotalPages(numberOfPages);
  };

  const handlePageChanged = (page: number, numberOfPages: number) => {
    setCurrentPage(page);
  };

  const handleError = (error: any) => {
    Alert.alert('Error', 'Failed to load PDF');
    console.error('PDF Error:', error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {pdfName}
        </Text>
        {totalPages > 0 && (
          <Text style={styles.pageInfo}>
            {currentPage} / {totalPages}
          </Text>
        )}
      </View>
      <View style={styles.pdfContainer}>
        <PdfViewer
          source={{uri: pdfPath}}
          onLoadComplete={handleLoadComplete}
          onPageChanged={handlePageChanged}
          onError={handleError}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 16,
  },
  pageInfo: {
    fontSize: 14,
    color: '#666',
  },
  pdfContainer: {
    flex: 1,
  },
});
