import { theme } from '@themes/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 5,
    paddingBottom: 10,
    backgroundColor: theme.colors.surface_primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  headertext: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,


  },
  containerUser: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    borderColor: '#fff',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    paddingBottom: 10,
    borderTopLeftRadius: 30,
    paddingLeft: 10,


  },
  textUser: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 15,
    paddingRight: 20,
    fontWeight: 'bold',


  },
  Botao: {

    display: 'flex',
    // width: '15%',
    flexDirection: 'row',
    borderRadius: 1000,
    // borderWidth: 1,
    borderColor: theme.colors.text_primary,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: theme.colors.surface_secondary,
  }
});


