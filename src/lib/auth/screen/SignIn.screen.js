import React from 'react';
import { connect } from 'react-redux'
import SignIn from './../container/SignIn.container'
import UserActions from './../../../redux-saga/redux/user.redux'
import SettingActions from '../../../redux-saga/redux/setting.redux'

export const SignInScreen = (props) => {
    return <SignIn {...props} />
}

const msp = (state) => {
  return {
    user: state.user.user,
  }
}

const mdp = (dispatch) => {
  return {
  	loginUser: (param, cb) => dispatch(UserActions.loginUser(param, cb)),
  	start: (param, cb) => dispatch(SettingActions.start(param, cb)),
  }
}

export default connect(msp, mdp)(SignInScreen)

