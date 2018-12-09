import React from 'react';
import { connect } from 'react-redux'
import SignIn from './../container/SignIn.container'
import ImageActions from './../../../redux-saga/redux/image.redux'
import SettingActions from '../../../redux-saga/redux/setting.redux'

export const SignInScreen = (props) => {
    return <SignIn {...props} />
}

const msp = (state) => {
  return {
    user: state.user.user,
    loading: state.image.loading
  }
}

const mdp = (dispatch) => {
  return {
  	fetchImageList: (param, cb) => dispatch(ImageActions.fetchImagelist(param, cb)),
  	start: (param, cb) => dispatch(SettingActions.start(param, cb)),
  }
}

export default connect(msp, mdp)(SignInScreen)

