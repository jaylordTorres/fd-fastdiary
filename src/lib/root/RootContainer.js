import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from './../navigation/AppNavigation'

import styles from './style'

class RootContainer extends Component {
  componentDidMount () {
    // will put all start up boot
  }

  render () {
    return (  
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <AppNavigation />
      </View>
    )
  }
}

export default RootContainer
