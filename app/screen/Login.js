import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {
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
        <View style={estilos.corpoTextos}>
          <Text style={estilos.corpoTexto}>Bem-Vindo!</Text>
          <Text style={estilos.corpoTexto}>Faça Login para entrar</Text>
        </View>

        <View style={estilos.corpoInputs}>
          <Text style={estilos.corpoTexto}>Nome</Text>
          <TextInput style={estilos.corpoInput} keyboardType='default' onChangeText={(e) => validarTexto(e)}/>
          <Text style={estilos.corpoTexto}>Email</Text>
          <TextInput style={estilos.corpoInput} keyboardType='email-address' onChangeText={(e) => validarEmail(e)}/>
        </View>
      </View>

      <View style={estilos.rodape}>
        <Pressable style={estilos.rodapeBotao} onPress={() => {salvarDados(nome, email), () => navigation.navigate('Perfio')}}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}


const estilos = StyleSheet.create({
  login: {
    height: '100%',
    backgroundColor: 'white',
  },
  //-------------------------
  corpo: {
    height: '85%',
    backgroundColor: '#CBD2D9',
    justifyContent: 'space-between',
  },
  corpoTextos: {
    marginTop: 50
  },
  corpoTexto: {
    fontSize: 20,
    color: '#344854',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  corpoInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#344854',
    height: 40,
    width: '60%',
    marginBottom: 10,
    paddingLeft: 6,
  },
  corpoInputs: {
    alignItems: 'center',
    marginBottom: 50,
  },
  //-------------------------
  rodape: {
    backgroundColor: '#F1F4F7',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rodapeBotao: {
    height: 40,
    width: 90,
    backgroundColor: '#CBD2D9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});
