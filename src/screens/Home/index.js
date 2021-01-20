import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import Tabbar from '../../components/Tabbar';
import style from './style';

function Home() {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.container}>
        <Tabbar />
      </View>
    </ScrollView>
  );
}

export default Home;
