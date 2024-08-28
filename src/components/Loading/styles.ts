import { theme } from "@themes/index"
import { StyleSheet } from "react-native"

const Style = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: theme.colors.background
    },
    message:{
        fontSize: 20,
        color: theme.colors.text_on_brand_color,
        fontWeight: 'bold'
    },
  })

  export { Style }