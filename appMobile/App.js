import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonBody from './components/LittleLemonBody';
import LittleLemonFooter from './components/LittleLemonFooter';

import LittleLemonMenuList from './components/LittleLemonList';

export default function App() {
  return (
    <View style={styles.fundoPreto}>
      <View style={styles.fundoLaranja}>
        <LittleLemonHeader/>
      </View>

      <ScrollView>
        <View>
          <LittleLemonMenuList/>
        </View>

        <View>
          <LittleLemonBody />
        </View>
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

//#F4CE14, #EE9972, #333333, #EDEFEE, black and white