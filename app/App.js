import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Login from './screen/Login';
import Perfio from './screen/Perfio';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Perfio" component={Perfio} options={{title: 'Little Limon', headerTitleAlign: 'center', headerTintColor: '#495E57'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
