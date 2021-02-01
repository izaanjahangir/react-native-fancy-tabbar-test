import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;
