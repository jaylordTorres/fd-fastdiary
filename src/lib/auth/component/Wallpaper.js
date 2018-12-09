import React from 'react'
import { StyleSheet } from 'react-native'
import { images, metrics } from './../../../style/global'
import Image from 'react-native-image-progress'
import Loading from './../../../shared/Loading'
import styles from './../style'

const Wallpaper = ({uri, children, style ={}}) => {
	const image = uri ? {uri} : images.defaultBackground
	return (
      <Image style={[styles.img, style]} source={image} indicator={Loading}>{children || null}</Image>
    )
}

export default Wallpaper;