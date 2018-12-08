import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchQuote: ['param', 'cb'],
  mergeQuote: ['param', 'cb']
})

export const QuoteTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
	wallQuote: '',
})

export const mergeQuote = (state, { param }) => state.merge(param)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERGE_QUOTE]: mergeQuote,
})
