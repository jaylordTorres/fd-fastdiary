import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Form, Input, Item, Label, Button, Icon, Text } from 'native-base'
import { util } from './../../../service/api'
import { ACCESS_CODE } from './../../../constant'
import Wallpaper from './../component/Wallpaper'

class SignIn extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      accessCode: null,
      error: false,
      success: false
    }
    this._login = this._login.bind(this)
    this._onReset = this._onReset.bind(this)
    this._onChangeAccessCode = this._onChangeAccessCode.bind(this)
  }

  componentDidMount () {
  }

  _login () {
    const { accessCode } = this.state
    if (ACCESS_CODE[accessCode]) {
      // success
      return this.setState({error: false, success: true})
    }
    return this.setState({error: true})
  }

  _onChangeAccessCode (e) {
    return this.setState({accessCode: e})
  }
  _onReset (e) {
    console.log(e)
    return this.setState({error: false, success: false, accessCode: null})
  }

  render() {
    return (
      <Container style={styles.container}>
      <Wallpaper style={styles.wallpaper}>
        <Form style={styles.form}>
            <Item error={this.state.error} success={this.state.success}>
            <Icon active name='lock' />
              <Input placeholder={'Access Code'}
                onChangeText={this._onChangeAccessCode}
                value={this.state.accessCode} />
              <Icon active name='trash' onPress={this._onReset} button />
            </Item>
            <Button full onPress={this._login}>
              <Text>login</Text>
            </Button>
          </Form>
        </Wallpaper>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'black' },
  wallpaper: { alignContent: 'center', justifyContent: 'center' },
  form: { backgroundColor: 'white', }
});


export default SignIn
