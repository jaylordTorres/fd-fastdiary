import { combineReducers } from 'redux'

export default reducers = combineReducers({
  image: require('./image.redux').reducer,
  setting: require('./setting.redux').reducer,
  user: require('./user.redux').reducer,
  quote: require('./quote.redux').reducer,
})
