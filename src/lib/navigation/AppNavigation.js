import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { screenData } from './../../util/object.helper'
import Menu from './screen/menu.screen'

// Auth
import Home from './../auth/screen/Home.screen'
import SignIn from './../auth/screen/SignIn.screen'
// Gallery
import Normal from './../gallery/screen/Normal.screen'
import Gray from './../gallery/screen/Gray.screen'

export const { screens, screenList } = screenData([
 	{
 		id: 'Home',
 		title: 'Home',
 		component: Home,
 	},
 	{
 		id: 'SignIn',
 		title: 'Sign In',
 		component: SignIn,
 	},
 	{
 		id: 'HomeMenu',
 		title: 'Home Menu',
 		component: Menu,
 	},
 	{
 		id: 'Normal',
 		title: 'Normal Design',
 		note: 'swiper',
 		component: Normal,
 	},
 	{
 		id: 'Gray',
 		title: 'Gray Design',
 		note: 'swiper',
 		component: Gray,
 	},
 	{
 		id: 'List',
 		title: 'Gallery List',
 		note: 'list',
 		component: SignIn,
 	}])

const AppNavigator = createStackNavigator(
  screens,
  {
  	headerMode: 'none',
    initialRouteName: "Home"
  }
)

export default createAppContainer(AppNavigator)