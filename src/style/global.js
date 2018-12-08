import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const metrics = {
	width,
	height
}

export const images = {
	defaultBackground: require('./../asset/1061.jpeg')
}
export default {
	metrics,
  images,	
}