import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { StyleGuide, Thumbnail } from "../components";

export const examples = [
  // {
  //   screen: "Examples",
  //   title: "Gestures & Animations",
  //   source: require("../../assets/examples/useTransition.png")
  // }
  // {
  //   screen: "Transitions",
  //   title: "Transitions",
  //   source: require("../../assets/examples/transitions.png")
  // },
  // {
  //   screen: "useTransition",
  //   title: "useTransition()",
  //   source: require("../../assets/examples/useTransition.png")
  // }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background
  }
});

export default () => {
  return (
    <ScrollView style={styles.container}>
      {examples.map(thumbnail => (
        <Thumbnail key={thumbnail.screen} {...thumbnail} />
      ))}
    </ScrollView>
  );
};
