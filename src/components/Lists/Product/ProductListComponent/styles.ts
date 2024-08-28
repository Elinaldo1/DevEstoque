import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.colors.surface_primary,
    // padding: 20,
    // height: '100%'
  },
  emptyComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textEmptyComponent: {
    fontSize: 18,
    color: theme.colors.text_primary,
  }
});

export { styles }