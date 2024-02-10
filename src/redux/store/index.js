import { configureStore, Tuple } from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
  devTools: process.env.NODE_ENV === 'development'
})

export default store

sagaMiddleware.run(rootSaga)
