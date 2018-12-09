import React from 'react'
import { Title as NTitle } from 'native-base'
import styles from './style'

export default ({children, style, ...props}) => {
	return <NTitle style={[styles.title, style]} {...props}>{children}</NTitle>
}
