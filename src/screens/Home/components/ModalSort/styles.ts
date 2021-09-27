import theme from "lib/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: theme.size.xl,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modal__content: {
    backgroundColor: theme.colors.white,
    width: "100%",
    borderRadius: theme.size.md,
    overflow: "hidden",
    paddingVertical: theme.size.xl,
  },
});

export default styles;
