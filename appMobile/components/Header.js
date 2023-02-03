import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function() {
  return (
    <View>
      <Text style={styleHeader.text}>Little Lemon</Text>
    </View>
  );
}


const styleHeader = StyleSheet.create({
  text: {
    color:'black',
    marginTop: 40,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center'
  }
});
