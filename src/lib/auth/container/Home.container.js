import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text, Title} from 'native-base'
import { util } from './../../../service/api'
import Wallpaper from './../component/Wallpaper'

class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      background: util.getRandomUri()
    }
    this._login = this._login.bind(this)
    this._next = this._next.bind(this)
  }

  componentDidMount () {
    this.props.fetchQuote()
    // this.props.loginUser({s:'jaylord'}, null)
  }

  _login() {
    this.props.navigation.navigate('SignIn')
  }

  _next () {
    
    this.setState({
      background: util.getRandomUri()
    }, ()=> this.props.fetchQuote())
  }

  render() {
    const { wallQuote } = this.props
    console.log( this.props)
    return (
      <Container style={styles.container}>
      <Wallpaper uri={this.state.background}>
        <Text style={styles.wallQuote}>{ wallQuote }</Text>
      </Wallpaper>
        <Footer>
          <FooterTab>
            <Button full onPress={this._login}>
              <Text>login</Text>
            </Button>
            <Button>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  wallQuote: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 4
  }
});


export default Home
