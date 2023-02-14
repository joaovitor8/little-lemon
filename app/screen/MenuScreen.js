import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList, SafeAreaView } from 'react-native'; //Componentes do ReactNative
import { Searchbar } from 'react-native-paper'; // Componente de Pesquisa
import { LIST_DEMONSTRACAO } from '../utils/prato';

const filtroComida = ['Appetizers', 'Salads', 'Beverages'];
const api_url = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'

const MenuScreen = () => {
  const [dataApi, setDataApi] = useState([]);

  const getDados = async () => {
    try {
      const response = await fetch(api_url);
      const json = await response.json();
      setDataApi(json.menu);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(getDados())
  console.log(dataApi)

  return(
    <SafeAreaView style={{ backgroundColor: '#3E524B', height: '100%' }}>
      <Searchbar style={estilos.pesquisa} placeholder="Search" iconColor="white" elevation={0} inputStyle={{ color: 'white' }} placeholderTextColor="white"/>

      <View style={{flexDirection: 'row',}}>
        {filtroComida.map((el) =>
          <TouchableOpacity style={estilos.filtro}>
            <View>
              <Text>{el}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <SectionList
        style={{marginHorizontal: 15}}
        sections={[
          {title: LIST_DEMONSTRACAO[0].title, data: LIST_DEMONSTRACAO[0].data},
          {title: LIST_DEMONSTRACAO[1].title, data: LIST_DEMONSTRACAO[1].data},
        ]}
        renderItem={({item}) => (
          <View style={estilos.listaItens}>
            <Text style={estilos.listaItem}>{item.title}</Text>
            <Text style={estilos.listaItem}>$ {item.price}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (<View><Text style={estilos.listaTitulo}>{section.title}</Text></View>)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default MenuScreen


const estilos = StyleSheet.create({
  pesquisa: {
    marginBottom: 10,
  },
  filtro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  listaTitulo: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#FBDABB',
    backgroundColor: '#3E524B',
  },
  listaItens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  listaItem: {
    fontSize: 20,
    color: 'white',
  },
});
