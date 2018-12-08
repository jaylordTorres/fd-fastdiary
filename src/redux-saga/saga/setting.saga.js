import { call, put } from 'redux-saga/effects'
import { nullFunc } from './../../util/object.helper'
import SettingRedux from '../redux/setting.redux'

export function * startSetting (api, action) {
  const { param, cb = nullFunc } = action
  try {
    // const randomPic = yield call(api.getRandom)
    // console.log(randomPic)
  } catch (e) {
    console.log(e)
  }
}
