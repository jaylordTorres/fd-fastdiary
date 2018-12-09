import React from 'react'
import { StyleSheet } from 'react-native'
import { images } from './../style/global'
import Image from 'react-native-image-progress'
import Loading from './Loading'
import styles from './style'

export default ({uri, children, style ={}}) => {
	const image = uri ? {uri} : images.defaultBackground
	return (
      <Image style={[styles.wallPaper, style]} source={image} indicator={Loading}>{children || null}</Image>
    )
}
