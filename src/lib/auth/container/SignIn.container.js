'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';
import { 
  View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
} from 'native-base'

class SignIn extends Component {
  render() {
    return (
      <Container>
        <Content>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={()=> this._onSignIn()}>
              <Text>facebook login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});


export default SignIn
