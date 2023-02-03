import {Text, StyleSheet, View, TextInput, Pressable} from 'react-native';

export default function LittleLemonPressable() {
  return (
    <View>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput style={styles.login} placeholder={"Email"} keyboardType={'email-address'}/>
      <TextInput style={styles.login} placeholder={"Senha"} keyboardType={'numeric'}/>

      <Pressable>
        <Text style={styles.loginButton}>Log in</Text>
      </Pressable>
    </View>
  );
}

//You are loggend in!

const styles = StyleSheet.create({
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
  },

  loginButton: {
    backgroundColor: 'orange',
    textAlign: 'center',
    padding: 20,
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 50,
  },
});