import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    borderRadius: theme.size.md,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: theme.colors.white,

    paddingRight: theme.size.lg,
    marginBottom: theme.size.lg,
    marginHorizontal: theme.size.lg,
  },

  card__content: {
    flex: 1,
    padding: theme.size.lg,
  },

  card__content__title: {
    fontWeight: "bold",
    fontSize: 14,
  },

  card__border: {
    width: theme.size.md,
    backgroundColor: theme.colors.green,
    height: "100%",
  },

  card__border__fails: {
    backgroundColor: theme.colors.orange,
  },
});

export default styles;
