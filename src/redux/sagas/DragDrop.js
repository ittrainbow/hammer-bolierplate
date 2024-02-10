import { call, put, select, takeEvery } from 'redux-saga/effects'
import { saveAs } from 'file-saver'

import { getNewCard } from '../../views/app-views/dragdrop/getNewCard'
import * as TYPES from '../constants/DragDrop'
import { getDimensions } from '../../views/app-views/dragdrop/getDimensions'

function* loadFileSaga({ payload }) {
  const { result } = payload.target
  const refArray = ['id', 'x', 'y', 'size', 'width', 'height']
  const uploadedJSON = JSON.parse(result)
  const check = [...new Set(uploadedJSON.map((el) => Object.keys(el).sort((a, b) => a - b)))]
    .map((el) => el.join('') === refArray.join(''))
    .reduce((a, b) => a && b)

  if (check) yield put({ type: TYPES.DD_LOAD_ELEMENTS, payload: uploadedJSON })
}

function* saveFileSaga() {
  const { cardList } = yield select((store) => store.dragdrop)
  const json = new Blob([JSON.stringify(cardList)], { type: 'application/json' })
  saveAs(json, `export-${new Date().getTime()}.json`)
}

function* dragStartSaga({ payload }) {
  const { clientX, clientY } = payload
  yield put({ type: TYPES.DD_DRAG_START, payload: { x: clientX, y: clientY } })
}

function* dragEndSaga({ payload }) {
  const { id } = payload.currentTarget
  const { clientX, clientY } = payload
  const { cardList, dragStart, firstDrag, fieldWidth, fieldHeight } = yield select((store) => store.dragdrop)
  const index = cardList.map((el) => el.id).indexOf(Number(id))
  const card = firstDrag ? getNewCard(payload.target.id, cardList) : cardList[index]
  const x = Math.max(0, Math.min(card.x + clientX - dragStart.x, fieldWidth - card.width - 10))
  const y = Math.max(0, Math.min(card.y + clientY - dragStart.y, fieldHeight - card.height - 10))
  const movingCard = { ...card, x, y }

  if (firstDrag) cardList.push(movingCard)
  else cardList[index] = movingCard

  localStorage.setItem('dragdropchart', JSON.stringify(cardList))

  yield put({ type: TYPES.DD_DRAG_END, payload: cardList })
}

function* firstDragStartSaga({ payload }) {
  const [deltaX, deltaY] = yield call(getDimensions, 'delta', payload.target.id)
  const rect = document.getElementById('field').getBoundingClientRect()
  const x = rect.x + deltaX
  const y = rect.y + deltaY
  yield put({ type: TYPES.DD_FIRST_DRAG_START, payload: { x, y } })
}

function* initCardsSaga() {
  const cardList = JSON.parse(localStorage.getItem('dragdropchart')) || []
  const [width, height] = JSON.parse(localStorage.getItem('dragdropsize')) || [720, 420]
  yield put({ type: TYPES.DD_INIT_CARDS, payload: { cardList, width, height } })
}

function* setFieldSaga() {
  const { tempWidth, tempHeight, fieldWidth, fieldHeight } = yield select((store) => store.dragdrop)
  const width = Math.max(Math.min(tempWidth || fieldWidth, 900), 100)
  const height = Math.max(Math.min(tempHeight || fieldHeight, 500), 100)
  localStorage.setItem('dragdropsize', JSON.stringify([width, height]))
  yield put({ type: TYPES.DD_SET_FIELD, payload: { width, height } })
}

export default function* DragDrop() {
  yield takeEvery(TYPES.DD_LOAD_FILE_SAGA, loadFileSaga)
  yield takeEvery(TYPES.DD_SAVE_FILE_SAGA, saveFileSaga)
  yield takeEvery(TYPES.DD_DRAG_START_SAGA, dragStartSaga)
  yield takeEvery(TYPES.DD_DRAG_END_SAGA, dragEndSaga)
  yield takeEvery(TYPES.DD_FIRST_DRAG_START_SAGA, firstDragStartSaga)
  yield takeEvery(TYPES.DD_INIT_CARDS_SAGA, initCardsSaga)
  yield takeEvery(TYPES.DD_SET_FIELD_SAGA, setFieldSaga)
}
