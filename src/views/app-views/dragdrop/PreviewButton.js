import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'

import * as TYPES from '../../../redux/constants/DragDrop'
import { useDragEvents } from './useDragEvents'
import { getNewCard, getDimensions } from '.'

export const PreviewButton = ({ thumb }) => {
  const dispatch = useDispatch()
  const { cardList } = useSelector((store) => store.dragdrop)
  const { handleDragStart, handleDragEnd } = useDragEvents()

  const { src, text, element } = thumb
  const [paddingTop, paddingBottom] = getDimensions('padding', element)

  useDrag(() => ({
    type: 'CARD',
    item: { id: thumb.element },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      }
    }
  }))

  const handleAddElement = (element) => {
    dispatch({ type: TYPES.DD_ADD_ELEMENT, payload: getNewCard(element, cardList) })
  }

  return (
    <Button
      key={text}
      className="card-button-big"
      onClick={() => handleAddElement(element)}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {text}
      <img
        id={element}
        src={src}
        width={75}
        alt={text}
        className="card-button-img"
        style={{ paddingTop, paddingBottom }}
      />
    </Button>
  )
}
