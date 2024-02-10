import {
  DD_ADD_ELEMENT,
  DD_CLEAR_CHART,
  DD_DRAG_START,
  DD_DRAG_END,
  DD_REMOVE_ELEMENT,
  DD_SET_FIELD,
  DD_INIT_CARDS,
  DD_LOAD_ELEMENTS,
  DD_FIRST_DRAG_START,
  DD_FIRST_DRAG_END,
  DD_SET_TEMP_WIDTH,
  DD_SET_TEMP_HEIGHT,
  DD_SET_DEFAULT_FIELD
} from '../constants/DragDrop'

const nullDragStart = { x: 0, y: 0 }

const initialState = {
  cardList: JSON.parse(localStorage.getItem('dragdropchart')) || [],
  dragStart: nullDragStart,
  fieldWidth: 720,
  fieldHeight: 420,
  tempWidth: 720,
  tempHeight: 420,
  changes: false,
  firstDrag: false
}

const dragdrop = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case DD_LOAD_ELEMENTS:
      return {
        ...state,
        cardList: payload
      }

    case DD_INIT_CARDS: {
      const { height, width, cardList } = payload
      return {
        ...state,
        cardList,
        fieldWidth: width,
        tempWIdth: width,
        fieldHeight: height,
        tempHeight: height
      }
    }

    case DD_SET_TEMP_WIDTH:
      return {
        ...state,
        tempWidth: payload
      }

    case DD_SET_TEMP_HEIGHT:
      return {
        ...state,
        tempHeight: payload
      }

    case DD_ADD_ELEMENT:
      const newCardsAdd = structuredClone(state.cardList)
      newCardsAdd.push(payload)
      return { ...state, cardList: newCardsAdd }

    case DD_REMOVE_ELEMENT:
      const newCardsRemove = structuredClone(state.cardList).filter((card) => card.id !== payload)
      return { ...state, cardList: newCardsRemove }

    case DD_DRAG_START:
      return { ...state, dragStart: payload }

    case DD_DRAG_END:
      return {
        ...state,
        dragStart: nullDragStart,
        cardList: payload
      }

    case DD_FIRST_DRAG_START:
      return {
        ...state,
        dragStart: payload,
        firstDrag: true
      }

    case DD_FIRST_DRAG_END:
      return {
        ...state,
        dragStart: nullDragStart,
        firstDrag: false
      }

    case DD_CLEAR_CHART:
      return { ...state, cardList: [] }

    case DD_SET_FIELD: {
      const { width, height } = payload
      return {
        ...state,
        fieldWidth: width,
        tempWIdth: width,
        fieldHeight: height,
        tempHeight: height
      }
    }

    case DD_SET_DEFAULT_FIELD:
      return {
        ...state,
        tempWidth: 720,
        tempHeight: 420
      }

    default:
      return state
  }
}
export default dragdrop
