import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tabbar from '../components/Tabbar';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => (
          <View
            style={{
              marginHorizontal: 15,
              marginBottom: 10,
            }}>
            <Tabbar />
          </View>
        )}>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
