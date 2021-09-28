import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badge: {
    borderWidth: 1,
    borderColor: theme.colors.green,
    backgroundColor: theme.colors.green,
    borderRadius: theme.size.xs,
    paddingVertical: theme.size.xs - 1,
    paddingHorizontal: theme.size.sm + 2,
  },

  badge__secondary: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.orange,
  },

  badge__text: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 11,
  },

  badge__text__secondary: {
    color: "black",
  },
});

export default styles;
