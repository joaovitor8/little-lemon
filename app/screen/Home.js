import { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList, Image, StyleSheet, ScrollView } from 'react-native';

const api = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'

export default function Home({ navigation }) {
  const [apiDados, setApiDados] = useState([])

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

  return (
    <View style={{ backgroundColor: 'white',}}>
        <FlatList data={apiDados} keyExtractor={item=>item} renderItem={({item}) =>
          <View style={estilos.list}>
            <View>
              <Text style={estilos.listNome}>{item.name}</Text>
              <Text style={estilos.listDescricao}>{item.description}</Text>
              <Text style={estilos.listPreco}>${item.price}</Text>
            </View>

            {/* <View>
              <Image source={require(`https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?`)} resizeMode="center" accessible={true} accessibilityLabel={ "Titulo da imagem" }/>
            </View> */}
          </View>
        }/>

        <Pressable style={estilos.botao} onPress={() => navigation.navigate('Perfio')}>
          <Text>Next</Text>
        </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  list: {
    marginTop: 15,
    marginBottom: 15,
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