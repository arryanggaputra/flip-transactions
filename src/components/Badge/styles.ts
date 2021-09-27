import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badge: {
    borderWidth: 2,
    borderColor: theme.colors.green,
    backgroundColor: theme.colors.green,
    borderRadius: theme.size.sm,
    paddingVertical: theme.size.xs,
    paddingHorizontal: theme.size.sm,
  },

  badge__secondary: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.orange,
  },

  badge__text: {
    color: theme.colors.white,
    fontWeight: "bold",
  },

  badge__text__secondary: {
    color: "black",
  },
});

export default styles;
