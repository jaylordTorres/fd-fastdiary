import React from 'react'
import { StyleSheet } from 'react-native'
import { images, metrics } from './../style/global'
import Image from 'react-native-image-progress'
import Loading from './Loading'

const Wallpaper = ({uri, children, style ={}}) => {
	const image = uri ? {uri} : images.defaultBackground
	return (
      <Image style={[styles.img, style]} source={image} indicator={Loading}>{children || null}</Image>
    )
}

const styles = StyleSheet.create({
	img: {
	  backgroundColor: 'black',
	  flex: 1,
	  resizeMode: 'stretch',
	  alignContent: 'center',
	  justifyContent: 'center',
	  height: metrics.height
	}
});

export default Wallpaper;