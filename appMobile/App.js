import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
//import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
//import Body from './components/Body';
//import FlatList from './components/FlatList';
//import SectionList from './components/SectionList';
//import TextInput from './components/TextInput';
//import Login from './components/Login';
//import Pressable from './components/Pressable';
import Img from './components/imagens'
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.fundoPreto}>
      <View style={styles.fundoLaranja}>
        <Header/>
      </View>

      <ScrollView>
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
    backgroundColor: '#333333',
    flex: 1,
  },
});
