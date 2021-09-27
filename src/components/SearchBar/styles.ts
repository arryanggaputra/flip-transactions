import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: theme.size.lg,
    paddingVertical: theme.size.md,
    alignItems: "center",
  },

  searchBar__input: {
    flex: 1,
    paddingVertical: theme.size.md,
  },
});

export default styles;
