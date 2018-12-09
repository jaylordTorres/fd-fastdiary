import React from 'react';
import { StyleSheet } from 'react-native';
import { metrics } from './../../style/global'

export default StyleSheet.create({
  container: { backgroundColor: 'black' },
  wallpaper: { alignContent: 'center', justifyContent: 'center' },
  form: { backgroundColor: 'white', },
  wallQuote: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 4,
  },
	img: {
	  backgroundColor: 'black',
	  flex: 1,
	  resizeMode: 'stretch',
	  alignContent: 'center',
	  justifyContent: 'center',
	  height: metrics.height
	}
})
