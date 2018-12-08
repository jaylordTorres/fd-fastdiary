import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from './../auth/screen/Home.screen'
import SignIn from './../auth/screen/SignIn.screen'


const AppNavigator = createStackNavigator(
  {
    SignIn: SignIn,
    Home: Home,
  },
  {
  	headerMode: 'none',
    initialRouteName: "Home"
  }
)

export default createAppContainer(AppNavigator)