import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import linkUse from './src/components/linkUse'


const navigator = createStackNavigator(
  {
   home: HomeScreen,
   link: linkUse
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      header: null,
    
    },
  }
);
export default createAppContainer(navigator);