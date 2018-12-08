import { takeLatest, all } from 'redux-saga/effects'
import Api from './../../service/api'

// type
import { UserTypes } from '../redux/user.redux'
import { SettingTypes } from '../redux/setting.redux'
import { QuoteTypes } from '../redux/quote.redux'

// saga
import { loginUser } from './user.saga'
import { startSetting } from './setting.saga';
import { fetchQuote } from './qoute.saga';

const api = Api.create()
const apiQ = Api.createQuote()

export default function * root () {
  yield all([
    takeLatest(UserTypes.LOGIN_USER, loginUser, api),
    takeLatest(SettingTypes.START, startSetting, api),
    takeLatest(QuoteTypes.FETCH_QUOTE, fetchQuote, apiQ),
  ])
}