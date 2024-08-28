import { theme } from "@themes/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface_secondary,
    alignItems: 'center',
    margin: 5
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#A4C539'
  },
  text: {
    color: theme.colors.text_primary,
    fontSize: 16,
  },

})

export { styles }
