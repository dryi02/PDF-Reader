import RNFS from 'react-native-fs';

export const DOCUMENTS_DIR = RNFS.DocumentDirectoryPath;
export const PDF_DIR = `${DOCUMENTS_DIR}/pdfs`;

export const ensurePdfDirectory = async (): Promise<void> => {
  try {
    const exists = await RNFS.exists(PDF_DIR);
    if (!exists) {
      await RNFS.mkdir(PDF_DIR);
    }
  } catch (error) {
    console.error('Error creating PDF directory:', error);
    throw error;
  }
};

export const getPdfFiles = async (): Promise<string[]> => {
  try {
    await ensurePdfDirectory();
    const files = await RNFS.readDir(PDF_DIR);
    return files
      .filter(file => file.name.toLowerCase().endsWith('.pdf'))
      .map(file => file.path);
  } catch (error) {
    console.error('Error reading PDF files:', error);
    throw error;
  }
};

export const copyFile = async (sourcePath: string, destPath: string): Promise<void> => {
  try {
    await RNFS.copyFile(sourcePath, destPath);
  } catch (error) {
    console.error('Error copying file:', error);
    throw error;
  }
};

export const deleteFile = async (filePath: string): Promise<void> => {
  try {
    await RNFS.unlink(filePath);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

export const getFileInfo = async (filePath: string) => {
  try {
    const stat = await RNFS.stat(filePath);
    return {
      name: stat.name,
      size: stat.size,
      dateModified: new Date(stat.mtime),
    };
  } catch (error) {
    console.error('Error getting file info:', error);
    throw error;
  }
};
