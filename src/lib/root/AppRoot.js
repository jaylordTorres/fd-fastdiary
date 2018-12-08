import React, { Component } from 'react'
import RootContainer from './RootContainer'
import { Provider } from 'react-redux'
import createStore from './../../redux-saga/'

// create our store
const store = createStore()

export default class AppRoot extends Component {
  render () {
    return (
      <Provider store={store}>
    		<RootContainer />
      </Provider>
    )
  }
}
