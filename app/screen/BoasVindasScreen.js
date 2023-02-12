import * as React from 'react'; //React
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'; //Componentes do ReactNative


const BoasVindasScreen = ({ navigation }) => {
  return(
    <View style={estilos.welcome}>
      <Image
        style={estilos.img}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={estilos.text}>Little Lemon, your local Mediterranean Bistro</Text>

      <View>
        <Pressable style={estilos.botao} onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={estilos.botaoText}>Cadastro</Text>
        </Pressable>

        <Pressable style={estilos.botao} onPress={() => navigation.navigate('Menu')}>
          <Text style={estilos.botaoText}>Menu</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BoasVindasScreen;


const estilos = StyleSheet.create({
  welcome: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#3E524B',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  botaoText: {
    color: 'white',
  },
});
