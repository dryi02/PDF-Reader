import React from 'react';
import {View, StyleSheet} from 'react-native';
import Pdf from 'react-native-pdf';

interface PdfViewerProps {
  source: {uri: string};
  onLoadComplete?: (numberOfPages: number, filePath: string) => void;
  onPageChanged?: (page: number, numberOfPages: number) => void;
  onError?: (error: any) => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  source,
  onLoadComplete,
  onPageChanged,
  onError,
}) => {
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={onLoadComplete}
        onPageChanged={onPageChanged}
        onError={onError}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
  },
});
