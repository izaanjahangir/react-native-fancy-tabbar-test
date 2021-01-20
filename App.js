import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
