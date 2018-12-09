import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Container, Header, Content, Title as NTitle, Card, CardItem, Body, Text, Icon, Right } from 'native-base';
import { screenList } from './../AppNavigation'
import { Title, Subtitle } from './../../../shared'
import { ButtonInfo, Wallpaper } from './../../../shared'

const homeMenuItem = [
  'Normal',
  'Gray',
  'Blur',
  'GrayBlur',
  'List'
]

class MenuScreen extends PureComponent {
  constructor(props) {
    super(props)

    this._onInfo = this._onInfo.bind(this)
  }

  _onPress(id) {
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

  _onInfo () {
    this.props.navigation.navigate('AppInfo')
  }

  render() {
  	return (
			<Container>
        <Header>
          <Body>
            <NTitle>MENU</NTitle>
          </Body>
          <Right>
            <ButtonInfo onPress={this._onInfo} />
          </Right>
        </Header>
        <Wallpaper>
          <Content>
            {this.list()}
          </Content>
        </Wallpaper>
      </Container>
    )
  }
}

export default MenuScreen