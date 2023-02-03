import {Text, StyleSheet, View, TextInput} from 'react-native';

export default function LittleLemonLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput style={styles.login} placeholder={"Email"} keyboardType={'email-address'}/>
      <TextInput style={styles.login} placeholder={"Senha"} keyboardType={'numeric'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },

  login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  }
});