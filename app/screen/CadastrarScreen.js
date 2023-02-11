import * as React from "react"; //React
import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native'; //Componentes do ReactNative
import { validateEmail } from '../utils/index' //Componentes


const CadastrarScreen = () => {
  const [email, onChangeEmail] = React.useState('')
  const validEmail = validateEmail(email); 

  return(
    <View style={styles.login}>
      <Image
        style={styles.img}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.text}>Subscribe to our newlatter for our latest delicius recipes!</Text>

      <TextInput
        style={styles.email}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
        keyboardType={'email-address'}
        textContentType="emailAddress"
      />

      <Pressable style={styles.botao} onPress={() => Alert.alert('Sucesso!', 'Thanks for subscribings, stay tuned!')} disabled={!validEmail}>
        <Text style={styles.botaoText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default CadastrarScreen;


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
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 20,
    textAlign: 'left',
    width: '90%'
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