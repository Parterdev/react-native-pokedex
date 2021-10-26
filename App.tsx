import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator'
import { BottomTabNavigator } from './src/navigator/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default App

