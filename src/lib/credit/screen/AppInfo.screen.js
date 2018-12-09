import React from 'react';
import { connect } from 'react-redux'
import AppInfo from './../container/AppInfo.container'

export const AppInfoScreen = (props) => {
    return <AppInfo {...props} />
}

const msp = (state) => {
  return {
  }
}

const mdp = (dispatch) => {
  return {
  }
}

export default connect(msp, mdp)(AppInfoScreen)

