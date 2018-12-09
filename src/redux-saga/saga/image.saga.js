import { call, put } from 'redux-saga/effects'
import { sampleSize as getRandom } from 'lodash'
import { nullFunc } from './../../util/object.helper'
import { cleanHtml, decodeHtml } from './../../util/string.helper'
import { RequestConfig } from './../../constant'
import ImageRedux from '../redux/image.redux'

export function * fetchImageList (api, action) {
  const { param, cb = nullFunc } = action
  try {
    yield put(ImageRedux.mergeImage({loading: true}))
    const req = yield call(api.getList)
    const imageList = getRandom(req.data, RequestConfig.MAX_IMAGE_COUNT)
    console.log(imageList)
    yield put(ImageRedux.mergeImage({list: imageList, loading: false}))
    cb()
  } catch (e) {
    console.log(e)
    yield put(ImageRedux.mergeImage({loading: false}))
  }
}
