import React, { ReactNode } from "react";
import { Text, TextProps as OriginalTextProps } from "react-native";

export interface TextProps extends OriginalTextProps {
  children: ReactNode;
}

export default ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};
