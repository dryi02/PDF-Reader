import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface FileRowProps {
  fileName: string;
  fileSize?: string;
  onPress: () => void;
  onDelete?: () => void;
}

export const FileRow: React.FC<FileRowProps> = ({
  fileName,
  fileSize,
  onPress,
  onDelete,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.fileName}>{fileName}</Text>
        {fileSize && <Text style={styles.fileSize}>{fileSize}</Text>}
      </View>
      {onDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  content: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: '500',
  },
  fileSize: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 2,
  },
  deleteButton: {
    padding: 8,
  },
  deleteText: {
    color: 'red',
    fontSize: 14,
  },
});
