import React from 'react';
import { connect } from 'react-redux'
import PicBox from './../container/PicBox.container'
import { util } from './../../../service/api'

export const PicBoxScreen = (props) => {
    return <PicBox {...props} />
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

export default connect(msp, mdp)(PicBoxScreen)

