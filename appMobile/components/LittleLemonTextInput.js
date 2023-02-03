import { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

export default function LittleLemonTextInput() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [msn, setMsn] = useState("")

  return(
    <View>
      <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non fermentum tellus, at tempor risus. Donec ultricies augue vitae mollis molestie. Sed semper, diam nec posuere tincidunt, diam nulla sagittis mi, nec vulputate magna erat ut massa. Integer nec nisi ligula. Praesent faucibus ligula ut rutrum commodo. Nullam consectetur ligula ac rutrum fringilla. Duis eget justo a libero volutpat sollicitudin vitae in mauris. Phasellus accumsan tristique mauris, non porttitor ante. Aenean nec molestie diam. Curabitur vitae vestibulum neque. Donec vel velit tellus. Praesent ultricies lacus neque, eget tempor nulla tempus ut. Phasellus dignissim in velit at gravida. In rutrum erat et dui vulputate, eu sollicitudin nunc fermentum. In accumsan dolor nec nisl pellentesque, ac auctor quam porttitor.
      </Text>
      <TextInput style={styles.input} placeholder={"Digite seu Nome"} value={nome} onChangeText={ text => setNome(text)} />
      <TextInput style={styles.input} placeholder={"Digite seu Email"} keyboardType={'email-address'} value={email} onChangeText={ text => setEmail(text)} />
      <TextInput style={styles.inputMsn} placeholder={"Digite sua Mensagem"} multiline={true} maxLength={250} value={msn} onChangeText={ text => setMsn(text)} />
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    color: 'white',
    margin: 12,
    padding: 10,
    textAlign: 'center'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  inputMsn: {
    height: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
});