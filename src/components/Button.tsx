import * as React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Text from "./Text";
import StyleGuide from "./StyleGuide";

const styles = StyleSheet.create({
  container: {
    padding: StyleGuide.spacing
  }
});

export default () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};
