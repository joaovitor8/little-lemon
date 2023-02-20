import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import Home from './screen/Home';
import Perfio from './screen/Perfio';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login}  options={{title: 'Little Limon', headerTitleAlign: 'center', headerTitleStyle: {fontSize: 30, fontWeight: 'bold', color: '#495E57'}, headerStyle: {backgroundColor: '#DEE3E9'}}}/> */}
        {/* <Stack.Screen name="Home" component={Home}/> */}
        <Stack.Screen name="Perfio" component={Perfio} options={{title: 'Little Limon', headerTitleAlign: 'center', headerTitleStyle: {fontSize: 30, fontWeight: 'bold', color: '#495E57'}, headerStyle: {backgroundColor: 'white'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
