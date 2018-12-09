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
import Blur from './../gallery/screen/Blur.screen'
import GrayBlur from './../gallery/screen/GrayBlur.screen'
import PicBox from './../gallery/screen/PicBox.screen'

// credit
import AppInfo from './../credit/screen/AppInfo.screen'

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
 		id: 'Blur',
 		title: 'Blur Design',
 		note: 'swiper',
 		component: Blur,
 	},
 	{
 		id: 'GrayBlur',
 		title: 'Gray Blur Design',
 		note: 'swiper',
 		component: GrayBlur,
 	},
 	{
 		id: 'List',
 		title: 'Gallery List',
 		note: 'thumbnail',
 		component: PicBox,
 	},
 	{
 		id: 'AppInfo',
 		title: 'Thanks',
 		note: 'credits to jay lord torres',
 		component: AppInfo,
 	}])

const AppNavigator = createStackNavigator(
  screens,
  {
  	headerMode: 'none',
    initialRouteName: 'Home', //'AppInfo', // 
  }
)

export default createAppContainer(AppNavigator)