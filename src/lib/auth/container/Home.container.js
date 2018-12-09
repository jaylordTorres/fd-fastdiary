import React, { Component } from 'react'
import { Container, Footer, FooterTab, Button, Icon, Text, Title} from 'native-base'
import { util } from './../../../service/api'
import { Wallpaper, ButtonInfo } from './../../../shared'
import { ButtonLogin } from './../component'
import styles from './../style'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      background: util.getRandomUri(),
      nextCount: 0,
    }
    this._login = this._login.bind(this)
    this._next = this._next.bind(this)
    this._onInfo = this._onInfo.bind(this)
  }

  componentDidMount () {
    this.props.fetchQuote()
  }

  _login() {
    this.props.navigation.navigate('SignIn')
  }

  _next () {
    this.setState((state) => (
      {
        background: util.getRandomUri(),
        nextCount: ++state.nextCount
      }), ()=> this.props.fetchQuote())
  }

  _onInfo () {
    this.props.navigation.navigate('AppInfo')
  }

  render() {
    const { wallQuote } = this.props
    const { nextCount, background } = this.state

    return (
      <Container style={styles.container}>
        <Wallpaper uri={background}>
          <Text style={styles.wallQuote}>{wallQuote}</Text>
        </Wallpaper>
        <Footer>
          <FooterTab>
            <ButtonLogin onPress={this._login} visible={nextCount > 3} />
            <ButtonInfo onPress={this._onInfo} />
            <Button onPress={this._next}>
              <Icon name="arrow-forward" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home
