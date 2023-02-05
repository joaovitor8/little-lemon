import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return(
    <View style={styles.welcome}>
      <Image style={styles.img} source={require('../assets/little-lemon-logo.png')}  resizeMode="center" accessible={true} accessibilityLabel={'Little Lemon Logo'}/>

      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.botaoText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcome: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#3E524B',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 10,
  },
  botaoText: {
    color: 'white',
  },
});