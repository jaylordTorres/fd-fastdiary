import { takeLatest, all } from 'redux-saga/effects'
import API from './../../service/api'

// type
import { UserTypes } from '../redux/user.redux'

// saga
import { loginUser } from './user.saga'

export default function * root () {
  yield all([
    takeLatest(UserTypes.LOGIN_USER, loginUser),
  ])
}