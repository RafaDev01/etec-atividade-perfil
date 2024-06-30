import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    perfil: {
      width: 150,
      height: 150,
      borderRadius: 100,
      marginBottom: 20
    },
    name: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 10
    },
    from: {
      marginBottom: 10
    },
    button1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: 40,
      width: '90%',
      height: 40,
      color: "#fff",
      borderColor: "#000",
      backgroundColor: '#000',
      marginBottom: 10
    },
    button2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: 40,
      width: '90%',
      height: 40,
      color: "#fff",
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'black',
      marginBottom: 10
    },
    text1: {
      color: "#fff"
    },
    text2: {
      color: "#000"
    },
    pictures : {
      flexDirection: 'row'
    },
    photos: {
      width: 170,
      height: 250,
      margin: 6
    }, image: {
      width: '100%',
      height: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      opacity: 0.200
    }
  });

export { styles }