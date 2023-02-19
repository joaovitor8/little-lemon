import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  
  //--------------------------------------------------

  const validarTexto = (valor) => {
    if (valor !== undefined && valor !== null && valor.trim() !== '') {
      setNome(valor);
    }
  };

  const validacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validarEmail = (valor) => {
    if (validacaoEmail.test(valor)) {
      setEmail(valor);
    }
  };

  //--------------------------------------------------

  const salvarDados = async (name, email) => {
    try {
      await AsyncStorage.setItem('@chaveNome', name);
      await AsyncStorage.setItem('@chaveEmail', email);
    }catch (e) {
      console.error('Nome/Email invalido', e)
    }
  }

  //--------------------------------------------------
  
  return (
    <View style={estilos.login}>

      <View style={estilos.corpo}>
        <Text style={estilos.corpoText}>Nome</Text>
        <TextInput style={estilos.corpoInput} keyboardType='default' onChangeText={(e) => validarTexto(e)}/>
        <Text style={estilos.corpoText}>Email</Text>
        <TextInput style={estilos.corpoInput} keyboardType='email-address' onChangeText={(e) => validarEmail(e)}/>
      </View>

      <View style={estilos.rodape}>
        <Pressable style={estilos.rodapeBotao} onPress={() => {salvarDados(nome, email)}}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}


const estilos = StyleSheet.create({
  login: {
    height: '100%',
    backgroundColor: '#444654'
  },
  //-------------------------
  corpo: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  corpoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  corpoInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1.5,
    width: 250,
    height: 35,
    marginBottom: 30,
    paddingLeft: 5,
  },
  //-------------------------
  rodape: {
    height: '15%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rodapeBotao: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
});
