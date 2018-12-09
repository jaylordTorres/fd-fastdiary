import React from 'react'
import { Card, CardItem, Body, Text } from 'native-base'

const ApiThank = (props) => {
	return (
	  <Card>
      <CardItem header>
        <Text>Api</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{'https://picsum.photos'}</Text>
          <Text>{'http://quotesondesign.com/'}</Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default ApiThank