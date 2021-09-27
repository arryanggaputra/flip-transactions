import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.size.lg,
    paddingHorizontal: theme.size.xl,
  },

  radio: {
    width: theme.size.lg + 4,
    height: theme.size.lg + 4,
    borderRadius: theme.size.lg + 4,
    borderWidth: 2,
    borderColor: theme.colors.orange,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.size.md,
  },

  radio__circle: {
    width: theme.size.md,
    height: theme.size.md,
    borderRadius: theme.size.md,
    backgroundColor: theme.colors.white,
  },

  radio__circle__checked: {
    backgroundColor: theme.colors.orange,
  },
});

export default styles;
