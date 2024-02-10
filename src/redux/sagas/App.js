import { call, delay, put, takeEvery } from 'redux-saga/effects'
import {
  DELAY,
  ERROR,
  FETCH_PRODUCTS,
  FETCH_SELECTED_USER,
  FETCH_USERS,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_PRODUCTS,
  SET_SELECTED_USER,
  SET_USERS
} from '../constants/App'

const fetchData = async (string) => {
  const data = await fetch(string).then((resp) => resp.json())
  return data
}

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchData, 'https://fakestoreapi.com/products/')
    yield delay(500)
    yield put({ type: SET_PRODUCTS, payload: products })
  } catch (error) {
    if (console.error instanceof Error) {
      yield put({ type: ERROR, payload: error.message })
    }
  }
}

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchData, 'https://jsonplaceholder.typicode.com/users/')
    yield delay(500)
    yield put({ type: SET_USERS, payload: users })
  } catch (error) {
    if (console.error instanceof Error) {
      yield put({ type: ERROR, payload: error.message })
    }
  }
}

function* delaySaga() {
  yield put({ type: SET_LOADING_TRUE })
  yield delay(500)
  yield put({ type: SET_LOADING_FALSE })
}

function* fetchSelectedUserSaga({ payload }) {
  try {
    const user = yield call(fetchData, `https://jsonplaceholder.typicode.com/users/${payload}`)
    yield delay(500)
    yield put({ type: SET_SELECTED_USER, payload: user })
  } catch (error) {
    if (console.error instanceof Error) {
      yield put({ type: ERROR, payload: error.message })
    }
  }
}

export default function* appSagas() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga)
  yield takeEvery(FETCH_USERS, fetchUsersSaga)
  yield takeEvery(FETCH_SELECTED_USER, fetchSelectedUserSaga)
  yield takeEvery(DELAY, delaySaga)
}
