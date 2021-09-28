import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card__content__title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
    textTransform: "uppercase",
  },

  card__content__title__wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  card__content__title__icon: {
    height: 13,
    width: 14,
    marginHorizontal: theme.size.xs,
  },
  card__content__title__name: {
    textTransform: "uppercase",
    paddingBottom: 2,
  },
});

export default styles;
