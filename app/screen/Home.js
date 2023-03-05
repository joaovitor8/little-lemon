import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { ConferirTabela, Deletar } from '../sql/DataBase';
import * as SQLite from 'expo-sqlite';


const HomeApi = () => {
  const [apiDados, setApiDados] = useState([])

  const api = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'

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
    getMenu()
  }, []);

  //ConferirTabela(apiDados)
  //console.log(apiDados)

  return (
    <View style={{ backgroundColor: 'white',}}>
      <FlatList data={apiDados} key={(item) => item.nome} renderItem={({item}) =>
        <View style={estilos.list}>
          <Text style={estilos.listNome}>{item.name}</Text>
          <Image
            source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}` }}
            resizeMode="center"
            accessible={true}
          />
          <Text style={estilos.listDescricao}>{item.description}</Text>
          <Text style={estilos.listPreco}>${item.price}</Text>
        </View>
      }/>
    </View>
  );
}

//https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/
//-------------------------------------------------------------------------------------------------

const HomeTabela = () => {
  const [dados, setDados] = useState([]);

  const db = SQLite.openDatabase('little_lemon');

  const getMenu = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM menu;',
          [],
          (_, { rows }) => {
            setDados(rows._array)
          },
          (tx, error) => {
            console.log('Error:', error);
          }
        );
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    getMenu()
  }, []);

  console.log(dados)

  return (
    <View style={{ backgroundColor: 'white' }}>
      {dados.length > 0 ? (
        <FlatList 
          data={dados} 
          key={(item) => item.id} 
          renderItem={({ item }) => (
            <View style={estilos.list}>
              <Text style={estilos.listNome}>{item.name}</Text>
              {/* Image */}
              <Text style={estilos.listDescricao}>{item.description}</Text>
              <Text style={estilos.listPreco}>${item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

//-------------------------------------------------------------------------------------------------

export default function Home() {
  return (
    <View>
      {HomeApi()}
    </View>
  )
}

//Deletar()

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