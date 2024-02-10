import { useDispatch } from 'react-redux'

import * as TYPES from '../../../redux/constants/DragDrop'

export const useDragEvents = () => {
  const dispatch = useDispatch()

  const handleDragStart = (e) => {
    dispatch({ type: TYPES.DD_DRAG_START_SAGA, payload: e })
  }

  const handleDragEnd = (e) => {
    dispatch({ type: TYPES.DD_DRAG_END_SAGA, payload: e })
  }

  return { handleDragStart, handleDragEnd }
}
