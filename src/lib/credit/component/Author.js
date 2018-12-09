import React from 'react'
import { Card, CardItem, Body, Text } from 'native-base'
import { ACCESS_CODE } from './../../../constant'

const Author = (props) => {
	return (
	  <Card>
      <CardItem header>
        <Text>Author: Jay Lord P. Torres</Text>
      </CardItem>
      <CardItem>
        <Body>
	        <Text>isens.jaylord@gmail.com</Text>
	        <Text>Hire me if you can</Text>
	        <Text> </Text>
          <Text>Thank u for using this app. </Text>
          <Text>You can login using password: {ACCESS_CODE.first.code} </Text>
          <Text>You will see login button after you press next (>) 4 times.</Text>
          <Text>This app can only show different random images & quotes. </Text>
          <Text>This app I made just for fun; you can sell it if you want. </Text>
          <Text>This app made in 2 days so dont expect to be so good </Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default Author