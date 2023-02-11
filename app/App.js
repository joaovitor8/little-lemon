import { StyleSheet } from 'react-native'; //Componentes do ReactNative
import { NavigationContainer } from '@react-navigation/native'; //Navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Navegação
import BoasVindasScreen from './screen/BoasVindasScreen'; //Componentes
import MenuScreen from './screen/MenuScreen'; //Componentes
import CadastrarScreen from './screen/CadastrarScreen'; //Componentes

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bem Vindo' component={BoasVindasScreen} />
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='Cadastrar' component={CadastrarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
