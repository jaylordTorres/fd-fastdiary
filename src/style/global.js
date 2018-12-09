import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const metrics = {
	width,
	height,
	halfWidth: Math.floor(width/2),
	halfHeight: Math.floor(height/2),
	doubleWidth: Math.floor(width * 2),
	doubleHeight: Math.floor(height * 2),
}

export const images = {
	defaultBackground: require('./../asset/1061.jpeg')
}
export default {
	metrics,
  images,	
}