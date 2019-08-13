import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import PlayScreen from './Screens/PlayScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Play: {screen: PlayScreen}
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
