import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
//import { StatusBar } from 'expo-status-bar';

import LittleLemonHeader from './components/LittleLemonHeader';
//import LittleLemonBody from './components/LittleLemonBody';
//import LittleLemonFlatList from './components/LittleLemonFlatList';
//import LittleLemonSectionList from './components/LittleLemonSectionList';
//import LittleLemonTextInput from './components/LittleLemonTextInput';
//import LittleLemonLogin from './components/LittleLemonLogin';
import LittleLemonPressable from './components/LittleLemonPressable';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={styles.fundoPreto}>
      <View style={styles.fundoLaranja}>
        <LittleLemonHeader/>
      </View>

      <ScrollView>
        <View>
          <LittleLemonPressable />
        </View>

        {/*
        <View>
          <LittleLemonLogin />
        </View>
        */}

        {/*
        <View>
          <LittleLemonTextInput />
        </View>
        */}

        {/*
        <View>
          <LittleLemonSectionList />
        </View>
        */}

        {/*
        <View>
          <LittleLemonFlatList />
        </View>
        */}

        {/* 
        <View>
          <LittleLemonBody />
        </View>
        */}
      </ScrollView>
      
      <View style={styles.fundoLaranja}>
        <LittleLemonFooter />
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
