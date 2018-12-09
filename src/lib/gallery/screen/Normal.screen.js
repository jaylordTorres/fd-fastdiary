import React from 'react';
import { connect } from 'react-redux'
import Swiper from './../container/Swiper.container'
import { util } from './../../../service/api'

export const NormalScreen = (props) => {
    const attributes = {
    	uriPicsum: util.createUriPicsum
    }

    return <Swiper {...props} {...attributes} />
}

const msp = (state) => {
  return {
  	imageList: state.image.list
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(NormalScreen)

