import { AuthContext } from '@contexts/auth';
import { theme } from '@themes/index';
import { useContext } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { PropsHeader } from '@interfaces/header/HeaderProps';


export function Header({caption}: PropsHeader) {

  const { signOut } = useContext(AuthContext);

  async function logOut(){
    signOut();
  }

  return (

    <View style= {styles.container}>

        <StatusBar barStyle='light-content' backgroundColor = {theme.colors.surface_primary}/>

        <Text style={styles.headertext}> {caption} </Text>

        <TouchableOpacity onPress = {()=>{logOut()}} style={styles.Botao}>
          {/* <AntDesign name = 'logout' style = {{fontSize:24, fontWeight: 'bold', paddingRight:5, color: theme.colors.text_primary}}/> */}
        </TouchableOpacity>

    </View>

  );
}
