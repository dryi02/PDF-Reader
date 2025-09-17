export interface PdfFile {
  id: string;
  name: string;
  path: string;
  size: number;
  dateModified: Date;
  dateAdded: Date;
}

export interface PdfViewerState {
  currentPage: number;
  totalPages: number;
  scale: number;
  horizontal: boolean;
}

export interface AppSettings {
  defaultZoom: number;
  autoRotate: boolean;
  showPageNumbers: boolean;
  theme: 'light' | 'dark' | 'auto';
}

export interface RecentPdf {
  id: string;
  name: string;
  path: string;
  lastRead: Date;
  lastPage: number;
}

export type RootStackParamList = {
  Library: undefined;
  Reader: {pdfPath: string; pdfName: string};
  Settings: undefined;
};
