import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import screens from './screens';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: null}}>
        {screens.bottomnav.map(options => (
          <Tab.Screen key={options.name} {...options} />
        ))}
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
