import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { ValidateEmail } from '../utils/index'

const SubscribeScreen = () => {
  return(
    <View style={styles.login}>
      <Image style={styles.img} source={require('../assets/little-lemon-logo-grey.png')}  resizeMode="center" accessible={true} accessibilityLabel={'Little Lemon Logo'}/>

      <Text style={styles.text}>Subscribe to our newlatter for our latest delicius recipes!</Text>

      <TextInput style={styles.email} placeholder={'Email'} keyboardType={'email-address'}/>

      <Pressable style={styles.botao}>
        <Text style={styles.botaoText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  login: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    marginVertical: 30,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  email: {
    paddingHorizontal: 140,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 20,
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