import { call, put } from 'redux-saga/effects'
import { nullFunc } from './../../util/object.helper'
import { cleanHtml, decodeHtml } from './../../util/string.helper'
import QuoteRedux from '../redux/quote.redux'

export function * fetchQuote (api, action) {
  const { param, cb = nullFunc } = action
  try {
    const randomQuote = yield call(api.getQuote)
    console.log(randomQuote)
    const wallQuote = randomQuote.data[0] ? randomQuote.data[0]['content'] : ''
    yield put(QuoteRedux.mergeQuote({wallQuote: decodeHtml(cleanHtml(wallQuote))}))

  } catch (e) {
    console.log(e)
  }
}
