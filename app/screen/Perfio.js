import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Perfio() {
  const [image, setImage] = useState(null);
  const [nomePerfio, setNomePerfio] = useState('');
  const [sobrenomePerfio, setSobrenomePerfio] = useState('');
  const [emailPerfio, setEmailPerfio] = useState('');
  const [telefonePerfio, setTelefonePerfio] = useState('');

  //--------------------------------------------------

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //--------------------------------------------------
  
  const validarNome = (valor) => {
    if (valor !== undefined && valor !== null) {
      //
    }
  };

  const validarSobrenome = (valor) => {
    if (valor !== undefined && valor !== null) {
      //
    }
  };

  const validacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validarEmail = (valor) => {
    if (validacaoEmail.test(valor)) {
      //
    }
  };

  const validacaoTelefone = /^(\()?\d{2}(\))?(-|\s)?\d{4}(-|\s)\d{4}$/;
  const validarTelefone = (valor) => {
    if (validacaoTelefone.test(valor)) {
      //
    }
  }

  //--------------------------------------------------

  const pegarDados = () => {
    AsyncStorage.getItem('@chaveNome').then(valorArmazenado => {
      console.log(valorArmazenado);
      setNomePerfio(valorArmazenado)
    }).catch(erro => {
      console.log(erro);
    });
    AsyncStorage.getItem('@chaveEmail').then(valorArmazenado => {
      console.log(valorArmazenado);
      setEmailPerfio(valorArmazenado)
    }).catch(erro => {
      console.log(erro);
    });
  }

  pegarDados()

  //--------------------------------------------------

  const limparDados = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error(e)
    }
  }
  
  //--------------------------------------------------

  return (
    <View style={{ backgroundColor: 'white',}}>
      <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={estilos.perfioTitulo}>Informações Pessoais</Text>



        <View style={{marginBottom: 15, marginTop: 15, flexDirection: 'row' }}>
          <View>
            <Text>Avatar</Text>
            {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
          </View>

          <View style={{flexDirection: 'row', marginLeft: 20 }}>
            <Pressable style={estilos.imageBotaoAtualizar} onPress={pickImage}>
              <Text>Atualizar</Text>
            </Pressable>

            <Pressable style={estilos.imageBotaoRemover}>
              <Text>Remover</Text>
            </Pressable>
          </View>
        </View>



        <View style={{ marginBottom: 10, marginTop: 15 }}>
          <Text style={estilos.informacoesText}>Primeiro Nome</Text>
          <TextInput style={estilos.informacoesInput} value={nomePerfio} keyboardType='default'/>

          <Text style={estilos.informacoesText}>Segundo Nome</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='default'/>

          <Text style={estilos.informacoesText}>Email</Text>
          <TextInput style={estilos.informacoesInput} value={emailPerfio} keyboardType='email-address'/>

          <Text style={estilos.informacoesText}>Numero de Telefone</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='phone-pad'/>
        </View>



        <View style={{ marginBottom: 15, marginTop: 10 }}>
          <Text style={estilos.checkTitulo}>Notificações</Text>

          <View style={estilos.check}>
            <Checkbox value={true}/>
            <Text style={estilos.checkText}>Status do pedido</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox value={true}/>
            <Text style={estilos.checkText}>Senha alterada</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox value={true}/>
            <Text style={estilos.checkText}>Ofertas especiais</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox value={true}/>
            <Text style={estilos.checkText}>Newsletter</Text>
          </View>
        </View>



        <View style={{ marginBottom: 50, marginTop: 15 }}>
          <Pressable style={estilos.botaoSair} onPress={limparDados}>
            <Text>Sair</Text>
          </Pressable>

          <Pressable style={estilos.alteracao}>
            <Text style={{color: 'white'}}>Salvar alterações</Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  perfioTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  //-------------------------
  imageBotaoAtualizar: {
    height: 40,
    width: 80,
    backgroundColor: '#495E57',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  imageBotaoRemover: {
    height: 40,
    width: 80,
    borderWidth: 1,
    borderColor: '#495E57',
    backgroundColor: 'white',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  //-------------------------
  informacoesText: {
    marginBottom: 5,
  },
  informacoesInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E9E9ED',
    height: 40,
    marginBottom: 20,
    paddingLeft: 5,
  },
  //-------------------------
  checkTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  check: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkText: {
    marginLeft: 10,
  },
  //-------------------------
  botaoSair: {
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DCAD54',
  },
  alteracao: {
    backgroundColor: '#495E57',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});