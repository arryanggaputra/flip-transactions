import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    borderRadius: theme.size.sm,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    paddingRight: theme.size.lg,
  },

  card__content: {
    flex: 1,
    padding: theme.size.lg,
  },

  card__content__title__wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  card__content__title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
    textTransform: "uppercase",
  },
  card__content__title__icon: {
    height: 13,
    backgroundColor: "red",
    width: 14,
    marginHorizontal: theme.size.xs,
  },
  card__content__title__name: {
    textTransform: "uppercase",
    paddingBottom: 2,
  },

  card__border: {
    width: theme.size.sm,
    backgroundColor: theme.colors.green,
    height: "100%",
  },

  card__border__fails: {
    backgroundColor: theme.colors.orange,
  },
});

export default styles;
