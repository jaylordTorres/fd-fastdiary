import React from 'react'
import { Subtitle as NSubtitle } from 'native-base'
import styles from './style'

export default ({children, style, ...props}) => {
	return <NSubtitle style={[styles.title, style]} {...props}>{children}</NSubtitle>
}
