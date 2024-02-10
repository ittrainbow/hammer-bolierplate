import React from 'react'
import { useDispatch } from 'react-redux'
import { useDrag } from 'react-dnd'

import * as TYPES from '../../../redux/constants/DragDrop'
import { useDragEvents } from './useDragEvents'

export const Card = ({ card }) => {
  const dispatch = useDispatch()

  useDrag(() => ({
    type: 'CARD',
    item: { id: card.id },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      }
    }
  }))

  const offset = { x: 230, y: 56 } // done lazy, can be calculated in useEffect
  const { id, size } = card
  const src = `/img/chairs/${size}.png`

  const getCardStyle = (card) => {
    const { width, height, x, y, id } = card
    return { left: x + offset.x, top: y + offset.y, width, height, zIndex: 2 * id }
  }

  const { handleDragStart, handleDragEnd } = useDragEvents(card.id)

  const handleRemoveElem = (id) => {
    dispatch({ type: TYPES.DD_REMOVE_ELEMENT, payload: id })
  }

  return (
    <div
      style={getCardStyle(card)}
      id={id}
      className="card"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable={true}
      key={id}
    >
      <img src={src} alt={id} style={{ zIndex: 2 * id }} />
      <div
        className="card-remove"
        onClick={() => handleRemoveElem(id)}
        style={{ zIndex: 2 * id + 1, position: 'absolute' }}
      >
        remove
      </div>
    </div>
  )
}
