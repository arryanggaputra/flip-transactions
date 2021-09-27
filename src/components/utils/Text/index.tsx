import React from "react";
import { Text as RNText, TextStyle } from "react-native";

/**
 * use TextStyle as props
 * <Text fontSize={12} fontWeight="bold" ... />
 */
const Text: React.FC<{} & TextStyle> = (props) => {
  const { children, ...styles } = props;
  return <RNText style={styles}>{children}</RNText>;
};

export default Text;
