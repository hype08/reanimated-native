import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { bInterpolate } from "react-native-redash";
import Animated from "react-native-reanimated";
import StyleGuide from "./StyleGuide";

const { Value } = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1,
    overflow: "hidden",
    backgroundColor: StyleGuide.palette.backgroundPrimary
  },
  image: {
    ...StyleSheet.absoluteFillObject
  }
});

interface ThumbnailProps {
  source: number;
}

export default ({ source }: ThumbnailProps) => {
  const value = new Value(0);
  const scale = bInterpolate(value, 1, 1.5);
  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          {
            resizeMode: "contain",
            transform: [{ scale }]
          }
        ]}
        {...{ source }}
      />
    </View>
  );
};
