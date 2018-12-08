import React from 'react';
import { connect } from 'react-redux'
import Home from './../container/Home.container'
import QuoteActions from './../../../redux-saga/redux/quote.redux'

export const HomeScreen = (props) => {
    return <Home {...props} />
}

const msp = (state) => {
  return {
    wallQuote: state.quote.wallQuote,
  }
}

const mdp = (dispatch) => {
  return {
  	fetchQuote: (param, cb) => dispatch(QuoteActions.fetchQuote(param, cb)),
  }
}

export default connect(msp, mdp)(HomeScreen)

