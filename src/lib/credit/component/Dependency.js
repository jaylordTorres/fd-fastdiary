import React from 'react'
import { Card, CardItem, Body, Text } from 'native-base'
import Package from './../../../../package.json'


const debList = {...Package.dependencies, ...Package.devDependencies}

const mapList = Object.keys(debList).map((item, index) => {
  return <Text key={String(index)}>{item} : {debList[item]}</Text>
})

const Dependency = (props) => {
	return (
	  <Card>
      <CardItem header>
        <Text>Dependency</Text>
      </CardItem>
      <CardItem>
        <Body>
          { mapList }
        </Body>
      </CardItem>
    </Card>
  )
}

export default Dependency