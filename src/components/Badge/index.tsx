import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";

interface IBadge {
  title?: string;
  variant: "primary" | "secondary";
}

const Badge: React.FC<IBadge> = (props) => {
  const { title, variant } = props;
  return (
    <View
      style={[styles.badge, variant === "secondary" && styles.badge__secondary]}
    >
      <Text
        style={[
          styles.badge__text,
          variant === "secondary" && styles.badge__text__secondary,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default React.memo(Badge);
