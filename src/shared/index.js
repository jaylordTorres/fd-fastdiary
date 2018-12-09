import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Title as NTitle, Subtitle as NSubtitle, Icon, Right } from 'native-base';


export const Title = ({children, style, ...props}) => {
	return <NTitle style={[styles.title, style]} {...props}>{children}</NTitle>
}

export const Subtitle = ({children, style, ...props}) => {
	return <NSubtitle style={[styles.title, style]} {...props}>{children}</NSubtitle>
}

const styles = StyleSheet.create({
	title: {
		color: 'gray'
	},
	subtitle: {
		color: 'gray'
	}
});
