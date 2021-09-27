import React from "react";
import { View as RNView, ViewStyle } from "react-native";

/**
 * use ViewStyle as props
 * <View display="flex" flex={1} flexDirection="row" ... />
 */
const View: React.FC<{} & ViewStyle> = (props) => {
  const { children, ...styles } = props;
  return <RNView style={styles}>{children}</RNView>;
};

export default View;
