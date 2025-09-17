import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PdfProvider} from './app/providers/PdfProvider';
import {RootNavigator} from './app/navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <PdfProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PdfProvider>
  );
};

export default App;
