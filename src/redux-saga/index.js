import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import reducers from './redux'

// createStore
export default () => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(reducers, applyMiddleware(sagaMiddleware))

	sagaMiddleware.run(rootSaga)
	return store
}