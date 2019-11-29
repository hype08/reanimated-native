import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Transitions from './src/Transitions';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Transitions: {
        screen: Transitions,
        navigationOptions: {
          title: "Transitions"
        }
      } 
    }
  )
)


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <AppNavigator />
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
