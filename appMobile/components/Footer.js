import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function() {
  return (
    <View >
      <Text style={styleFooter.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}


const styleFooter = StyleSheet.create({
  text: {
    color:'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  }
});
