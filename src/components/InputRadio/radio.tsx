import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Radio = (props: { checked?: boolean }) => {
  return (
    <View style={styles.radio}>
      <View
        style={[
          styles.radio__circle,
          props.checked && styles.radio__circle__checked,
        ]}
      />
    </View>
  );
};

export default Radio;
