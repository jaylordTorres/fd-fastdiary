import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loginUser: ['user', 'cb'],
  mergeUser: ['user', 'cb']
})

export const UserTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
	user: null,
})

export const mergeUser = (state, { user }) => state.merge(user)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERGE_USER]: mergeUser,
})
