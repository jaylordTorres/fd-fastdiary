import React from 'react';
import { StyleSheet } from 'react-native';
import { metrics } from './../../style/global'

export default StyleSheet.create({
  container: { backgroundColor: 'black' },
  wallpaper: { alignContent: 'center', justifyContent: 'center', flex: 1 },
  form: { backgroundColor: 'white', },
  wallQuote: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 4,
  }
})
