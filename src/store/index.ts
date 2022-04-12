import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { RepositoriesState } from './ducks/moviesRepository/types'

import rootReducer from './ducks/rootReducer'
import { rootSaga } from './ducks/rootSaga'

export interface ApplicationState {
  moviesRepository: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export default store
