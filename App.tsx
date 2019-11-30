import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Transitions from "./src/Transitions";
import UseTransition from "./src/UseTransition";
import StyleGuide from "./src/components/StyleGuide";

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Transitions: {
        screen: Transitions,
        navigationOptions: {
          title: "Transitions"
        }
      },
      useTransition: {
        screen: UseTransition,
        navigationOptions: {
          title: "useTransition"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: StyleGuide.palette.primary,
          borderBottomWidth: 0
        },
        headerTintColor: "white"
      }
    }
  )
);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}
