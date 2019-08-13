import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import PlayScreen from './Screens/PlayScreen';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Play: {screen: PlayScreen}
}, {
  
})

const App = createAppContainer(MainNavigator);

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
