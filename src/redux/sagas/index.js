import { all, call, spawn } from 'redux-saga/effects'
import Auth from './Auth'
import App from './App'
import DragDrop from './DragDrop'

const sagas = [Auth, App, DragDrop]

export default function* rootSaga() {
  const run = sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (error) {
          console.error(error)
        }
      }
    })
  })

  yield all(run)
}
