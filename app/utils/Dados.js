import AsyncStorage from '@react-native-async-storage/async-storage';


export const Salvar = async (name, email) => {
  try {
    await AsyncStorage.setItem('@chaveNome', name);
    await AsyncStorage.setItem('@chaveEmail', email);
  }catch (e) {
    console.error(e)
  }
}


export const Limpar = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error(e)
  }
}
