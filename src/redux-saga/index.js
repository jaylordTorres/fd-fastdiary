import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const reducers = combineReducers({
  user: require('./redux/user.redux').reducer
})  

// createStore
export default () => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(reducers, applyMiddleware(sagaMiddleware))

	sagaMiddleware.run(rootSaga)
	return store
}