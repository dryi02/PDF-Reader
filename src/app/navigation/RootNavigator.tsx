import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LibraryScreen} from '../../screens/LibraryScreen';
import {ReaderScreen} from '../../screens/ReaderScreen';
import {SettingsScreen} from '../../screens/SettingsScreen';

export type RootStackParamList = {
  Library: undefined;
  Reader: {pdfPath: string; pdfName: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Library">
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Reader" component={ReaderScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
