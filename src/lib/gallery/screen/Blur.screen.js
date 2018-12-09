import React from 'react';
import { connect } from 'react-redux'
import Swiper from './../container/Swiper.container'
import { util } from './../../../service/api'

export const BlurScreen = (props) => {
    const attributes = {
    	uriPicsum: util.createUriPicsumBlur
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

export default connect(msp, mdp)(BlurScreen)

