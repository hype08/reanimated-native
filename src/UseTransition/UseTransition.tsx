import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import StyleGuide from "../components/StyleGuide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background
  }
});

export default () => {
  return <View style={styles.container} />;
};
