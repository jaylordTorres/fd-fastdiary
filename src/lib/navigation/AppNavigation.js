'use strict'

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation"
import SignIn from './../auth/screen/SignIn.screen'


const AppNavigator = createStackNavigator(
  {
    SignIn: SignIn,
  },
  {
  	headerMode: 'none',
    initialRouteName: "SignIn"
  }
);

export default createAppContainer(AppNavigator);