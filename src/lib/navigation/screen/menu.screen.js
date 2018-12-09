import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Right } from 'native-base';
import { screenList } from './../AppNavigation'
import { Title, Subtitle } from './../../../shared'
import Wallpaper from './../../../shared/Wallpaper'

const homeMenuItem = [
  'Normal',
  'Gray',
  'Blur',
  'GrayBlur',
  'List'
]

class MenuScreen extends PureComponent {
  _onPress(id) {
    console.log(id)
    this.props.navigation.navigate(id)
  }

	list () {
	  return homeMenuItem.map((id, index) => {
			return <Card key={id}><CardItem button onPress={()=> this._onPress(id)}>
				<Body>
					<Title>{screenList[id].title}</Title>
          <Subtitle>{screenList[id].note}</Subtitle>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
       </CardItem></Card>
		})
	}

  render() {
  	return (
			<Container>
        <Wallpaper>
            {this.list()}
        </Wallpaper>
      </Container>
    )
  }
}

const styles = StyleSheet.create({

})

export default MenuScreen