import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
