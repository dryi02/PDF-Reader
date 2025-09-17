import DocumentPicker from 'react-native-document-picker';

export interface PickedDocument {
  name: string;
  uri: string;
  type: string;
  size: number;
}

export const pickPdfDocument = async (): Promise<PickedDocument | null> => {
  try {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      copyTo: 'documentDirectory',
    });

    if (result.length > 0) {
      const doc = result[0];
      return {
        name: doc.name || 'Unknown',
        uri: doc.fileCopyUri || doc.uri,
        type: doc.type || 'application/pdf',
        size: doc.size || 0,
      };
    }
    return null;
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
      // User cancelled the picker
      return null;
    }
    console.error('Error picking document:', error);
    throw error;
  }
};

export const pickMultiplePdfDocuments = async (): Promise<PickedDocument[]> => {
  try {
    const results = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.pdf],
      copyTo: 'documentDirectory',
    });

    return results.map(doc => ({
      name: doc.name || 'Unknown',
      uri: doc.fileCopyUri || doc.uri,
      type: doc.type || 'application/pdf',
      size: doc.size || 0,
    }));
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
      // User cancelled the picker
      return [];
    }
    console.error('Error picking documents:', error);
    throw error;
  }
};
