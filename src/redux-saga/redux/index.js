import { combineReducers } from 'redux'
export default reducers = combineReducers({
  user: require('./user.redux').reducer,
  setting: require('./setting.redux').reducer,
  quote: require('./quote.redux').reducer,
})
