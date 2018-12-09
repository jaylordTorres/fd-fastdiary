import React from 'react'
import { StyleSheet } from 'react-native'
import { metrics } from './../style/global'

export default StyleSheet.create({
	title: {
		color: 'gray'
	},
	subtitle: {
		color: 'gray'
	},
	wallPaper: {
	  backgroundColor: 'black',
	  flex: 1,
	  resizeMode: 'stretch',
	  alignContent: 'center',
	  justifyContent: 'center',
	  height: metrics.height
	}
});
