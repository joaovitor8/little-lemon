import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
//import Body from './components/Body';
//import FlatList from './components/FlatList';
//import SectionList from './components/SectionList';
//import TextInput from './components/TextInput';
//import Login from './components/Login';
//import Pressable from './components/Pressable';
//import ImgMode from './components/imgMode'
import Footer from './components/Footer';

//<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>

export default function App() {
  return (
    <View style={styles.fundoPreto}>
      <View style={styles.fundoLaranja}>
        <Header/>
      </View>

      <ScrollView>

        {/*
        <View>
          <ImgMode/>
        </View>
        */}

        {/*
        <View>
          <Pressable />
        </View>
        */}

        {/*
        <View>
          <Login />
        </View>
        */}

        {/*
        <View>
          <TextInput />
        </View>
        */}

        {/*
        <View>
          <SectionList />
        </View>
        */}

        {/*
        <View>
          <FlatList />
        </View>
        */}

        {/* 
        <View>
          <Body />
        </View>
        */}
      </ScrollView>
      
      <View style={styles.fundoLaranja}>
        <Footer />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  fundoLaranja: {
    backgroundColor: '#EE9972',
  },

  fundoPreto: {
    flex: 1,
  },
});
