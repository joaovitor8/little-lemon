import {Text, StyleSheet, View, Image, ImageBackground, useColorScheme} from 'react-native';

export default function() {
  const colorScheme = useColorScheme();
  return (
    <View style={[colorScheme === 'dark' ? {backgroundColor: '#fff'} : {backgroundColor: '#333333'}]}>
      <View style={styles.viewLogo}>
        <Image style={styles.logo} source={require('../img/Image.png')} resizeMode="center" accessible={true} accessibilityLabel={'Little Lemon Logo'}/>
        <Text style={styles.logoText}>Little Lemon</Text>
      </View>

      <Text style={[styles.text, colorScheme === 'dark' ? {color: '#333333'} : {color: '#EDEFEE'}]}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!</Text>
    </View>
  );
}

//ImageBackground  -  Usado para colocar uma imagem como papel de parede
//useColorScheme  -  Altera o tema dark / light

const styles = StyleSheet.create({
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 20,
  },

  logo: {
    height: 100,
    width: 100,
  },

  logoText: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
  },

  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: '100%',
  },
});