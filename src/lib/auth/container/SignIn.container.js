import React, { Component } from 'react'
import { Container, Form, Input, Item, Label, Button, Icon, Text } from 'native-base'
import { util } from './../../../service/api'
import { ACCESS_CODE } from './../../../constant'
import { Wallpaper } from './../../../shared'
import Loading from './../../../shared/Loading'
import styles from './../style'

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

  _onChangeAccessCode = e => this.setState({error: false, accessCode: e})

  _onReset = e => this.setState({error: false, success: false, accessCode: null})

  _login = () => {
    // TODO: must shift to firebase
    if (ACCESS_CODE[this.state.accessCode]) {
      // success
      this.props.fetchImageList(null,() =>
      this.props.navigation.navigate('HomeMenu'))
      return this.setState({error: false, success: true})
    }
    this.setState({error: true})
  }

  getSubmitButton = (loading) => {
    if (loading) {
      return <Loading />
    }
    return <Button full onPress={this._login} disabled={loading}><Text>login</Text></Button>
  }

  render() {
    const { loading } = this.props
    return (
      <Container style={styles.container}>
      <Wallpaper style={styles.wallpaper}>
        <Form style={styles.form}>
            <Item error={this.state.error} success={this.state.success}>
            <Icon active name='lock' />
              <Input placeholder={'Access Code'}
                onChangeText={this._onChangeAccessCode}
                onSubmitEditing={this._login}
                value={this.state.accessCode} />
              <Icon active name='trash' onPress={this._onReset} button />
            </Item>
            {this.getSubmitButton(loading)}
          </Form>
        </Wallpaper>
      </Container>
    )
  }
}

export default SignIn
