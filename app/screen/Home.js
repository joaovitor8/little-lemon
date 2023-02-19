import { View, Button, } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Login' onPress={() => navigation.navigate('Login')}/>
      <Button title='Perfio' onPress={() => navigation.navigate('Perfio')}/>
    </View>
  );
}
