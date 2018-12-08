import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  start: ['param', 'cb'],
  mergeSetting: ['param', 'cb']
})

export const SettingTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
	backgroundUri: null,
})

export const mergeSetting = (state, { param }) => state.merge(param)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERGE_SETTING]: mergeSetting,
})
