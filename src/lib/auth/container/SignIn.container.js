'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Image
} from 'react-native';
import { 
  Container, Form, Input, Item, Label, Button, Icon, Text
} from 'native-base'
import Wallpaper from './../component/Wallpaper'
import { util } from './../../../service/api'

class SignIn extends Component {
  constructor(props) {
    super(props);
  
    this.state = {}
    this._login = this._login.bind(this)
  }

  componentDidMount () {
  }

  _login () {

  }

  render() {
    return (
      <Container style={styles.container}>
      <Wallpaper style={styles.wallpaper}>
        <Form style={styles.form}>
            <Item error>
            <Icon active name='lock' />
              <Input placeholder={'Access Code'}/>
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
  container: {
    backgroundColor: 'black'
  },
  wallpaper: {
    alignContent: 'center', justifyContent: 'center'
  },
  form: {
    backgroundColor: 'white',

  }
});


export default SignIn
