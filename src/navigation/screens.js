import React from 'react';
import {Image} from 'react-native';
import Home from '../screens/home';
import Market from '../screens/market';
import CoinPage from '../screens/coinpage';
import BottomTabNavigator from './bottom-tabs';
import Transactions from '../screens/transactions';
import Profile from '../screens/profile';

const bottomnav = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: ({focused}) =>
        focused ? (
          <Image source={require('../assets/icons/home-active.png')} />
        ) : (
          <Image source={require('../assets/icons/home.png')} />
        ),
      tabBarShowLabel: false,
    },
  },
  {
    name: 'Market',
    component: Market,
    options: {
      tabBarIcon: ({focused}) =>
        focused ? (
          <Image source={require('../assets/icons/market-active.png')} />
        ) : (
          <Image source={require('../assets/icons/market.png')} />
        ),
      tabBarShowLabel: false,
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: ({focused}) =>
        focused ? (
          <Image source={require('../assets/icons/profile-active.png')} />
        ) : (
          <Image source={require('../assets/icons/profile.png')} />
        ),
      tabBarShowLabel: false,
    },
  },
];

const stacknav = [
  {
    name: 'BottomTab',
    component: BottomTabNavigator,
    options: {
      headerShown: null,
    },
  },
  {
    name: 'CoinPage',
    component: CoinPage,
  },
  {
    name: 'Transactions',
    component: Transactions,
  },
];

export default {bottomnav, stacknav};
