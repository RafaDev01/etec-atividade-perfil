import { TouchableOpacity, ImageBackground,Image, Text, View } from 'react-native';
import { styles } from './src/views/css/Style'

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/background.webp')} resizeMode="cover" style={styles.image}>
       </ImageBackground>
      <Image style={styles.perfil} source={require('./assets/goku-perfil.webp')} />
      <Text style={styles.name}>Goku Black</Text>
      <Text style={styles.from}>São paulo - Brazil</Text>
      <TouchableOpacity style={styles.button1}>
          <Text style={styles.text1}>Follow Goku</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
          <Text style={styles.text2}>Message</Text>
      </TouchableOpacity>
      <View style={styles.pictures}>
          <Image style={styles.photos} source={require('./assets/picture-1.webp')} />
          <Image style={styles.photos} source={require('./assets/picture-2.webp')} />
      </View>
    </View>
  );
}