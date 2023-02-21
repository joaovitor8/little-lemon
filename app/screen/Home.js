import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { CriarTabela, AddDados, VerTabela } from '../sql/DataBase';

const api = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'


export default function Home({ navigation }) {
  const [apiDados, setApiDados] = useState([])

  //--------------------------------------------------

  const getMenu = async () => {
    try {
      const response = await fetch(api);
      const json = await response.json();
      setApiDados(json.menu);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  //--------------------------------------------------

  CriarTabela()
  AddDados()
  VerTabela()

  return (
    <View style={{ backgroundColor: 'white',}}>
      <Button title={'Perfio'} onPress={() => navigation.navigate('Perfio')}/>

      <FlatList data={apiDados} keyExtractor={item=>item.name} renderItem={({item}) =>
        <View style={estilos.list}>
          <Text style={estilos.listNome}>{item.name}</Text>
          {/* Image */}
          <Text style={estilos.listDescricao}>{item.description}</Text>
          <Text style={estilos.listPreco}>${item.price}</Text>
        </View>
      }/>
    </View>
  );
}


const estilos = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 30,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  listNome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listDescricao: {
    fontSize: 20,
    marginBottom: 5,
    color: '#495E57',
  },
  listPreco: {
    fontSize: 18,
    color: '#495E57',
    marginBottom: 10
  },

  botao: {
    height: 30, 
    width: 70,
    backgroundColor: 'red',
  },
});


//<Image source={require(`https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?`)} resizeMode="center" accessible={true} accessibilityLabel={ "Titulo da imagem" }/>