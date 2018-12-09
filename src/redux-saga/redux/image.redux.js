import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchImagelist: ['param', 'cb'],
  mergeImage: ['param', 'cb']
})

export const ImageTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
	list: [],
	loading: false
})

export const mergeImage = (state, { param }) => state.merge(param)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERGE_IMAGE]: mergeImage,
})
