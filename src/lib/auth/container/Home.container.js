import React, { Component } from 'react'
import { Container, Footer, FooterTab, Button, Icon, Text, Title} from 'native-base'
import { util } from './../../../service/api'
import { Wallpaper } from './../../../shared'
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

  getLoginButton () {
    if (this.state.nextCount > 3) {
      return <Button full onPress={this._login}><Text>login</Text></Button>
    }
    return null
  }

  _onInfo () {
    this.props.navigation.navigate('AppInfo')
  }

  render() {
    const { wallQuote } = this.props
    return (
      <Container style={styles.container}>
      <Wallpaper uri={this.state.background}>
        <Text style={styles.wallQuote}>{wallQuote}</Text>
      </Wallpaper>
        <Footer>
          <FooterTab>
            {this.getLoginButton()}
            <Button onPress={this._onInfo} tansparent>
              <Icon name="information" />
            </Button>
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
