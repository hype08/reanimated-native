import React, { useRef } from "react";
import { Text, StyleSheet } from "react-native";
import {
  Transitioning,
  Transition,
  TransitioningView
} from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

const transition = (
  <Transition.Change interpolation="easeInOut" durationMs={400} />
);

export default () => {
  const ref = useRef<TransitioningView>(null);
  return (
    <Transitioning.View style={[styles.container]} {...{ transition, ref }}>
      <Text>Hello</Text>
    </Transitioning.View>
  );
};
