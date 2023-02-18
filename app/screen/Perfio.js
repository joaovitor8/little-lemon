import { View, Text, TextInput, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Perfio() {
  return (
    <View style={{ backgroundColor: 'white',}}>
      <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={estilos.perfioTitulo}>Informações Pessoais</Text>


        <View style={{marginBottom: 15, marginTop: 15, flexDirection: 'row' }}>
          <View>
            <Text>Avatar</Text>
            <Image />
          </View>

          <View style={{flexDirection: 'row', marginLeft: 20 }}>
            <Pressable>
              <Text>Atualizar</Text>
            </Pressable>

            <Pressable>
              <Text>Remover</Text>
            </Pressable>
          </View>
        </View>


        <View style={{ marginBottom: 10, marginTop: 15 }}>
          <Text style={estilos.informacoesText}>Primeiro Nome</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='default'/>

          <Text style={estilos.informacoesText}>Segundo Nome</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='default'/>

          <Text style={estilos.informacoesText}>Email</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='email-address'/>

          <Text style={estilos.informacoesText}>Numero de Telefone</Text>
          <TextInput style={estilos.informacoesInput} keyboardType='phone-pad'/>
        </View>


        <View style={{ marginBottom: 15, marginTop: 10 }}>
          <Text style={estilos.checkTitulo}>Notificações</Text>

          <View style={estilos.check}>
            <Checkbox />
            <Text style={estilos.checkText}>Status do pedido</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox />
            <Text style={estilos.checkText}>Senha alterada</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox />
            <Text style={estilos.checkText}>Ofertas especiais</Text>
          </View>

          <View style={estilos.check}>
            <Checkbox />
            <Text style={estilos.checkText}>Newsletter</Text>
          </View>
        </View>


        <View style={{ marginBottom: 50, marginTop: 15 }}>
          <Pressable style={estilos.botaoSair}>
            <Text>Sair</Text>
          </Pressable>

          <View style={estilos.botoesAlteracao}>
            <Pressable style={estilos.alteracao}>
              <Text style={estilos.alteracaoText}>Descartar alterações</Text>
            </Pressable>

            <Pressable style={estilos.alteracao}>
              <Text style={estilos.alteracaoText}>Salvar alterações</Text>
            </Pressable>
          </View>
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
  informacoesText: {
    marginBottom: 5,
  },
  informacoesInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
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
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    marginBottom: 15,
  },
  botoesAlteracao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  alteracao: {
    backgroundColor: '#495E57',
    width: '45%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alteracaoText: {
    color: 'white',
  },
});