import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import style from './style';

function Home() {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.container}>
        {new Array(20).fill(0).map((_, i) => (
          <Box key={i} />
        ))}
      </View>
    </ScrollView>
  );
}

function Box() {
  const colors = [
    '#34495e',
    '#2c3e50',
    '#222f3e',
    '#30336b',
    '#130f40',
    '#535c68',
    '#0a3d62',
    '#0c2461',
    '#40407a',
    '#2c2c54',
    '#227093',
    '#cc8e35',
    '#cd6133',
    '#b33939',
    '#34ace0',
    '#ff9f1a',
    '#ffb8b8',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return (
    <View
      style={{
        width: '100%',
        height: 100,
        backgroundColor: colors[randomIndex],
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}>
        Dummy data
      </Text>
    </View>
  );
}
export default Home;
