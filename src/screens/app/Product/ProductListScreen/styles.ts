import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface_primary,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopWidth: 2,
    borderColor: theme.colors.stroke,
    backgroundColor: theme.colors.surface_primary,
    paddingHorizontal: 50
  }
});

export { styles }
