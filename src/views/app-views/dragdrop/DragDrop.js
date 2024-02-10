import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Button, Input } from 'antd'
import { DndProvider } from 'react-dnd'

import PageHeader from '../../../components/layout-components/PageHeader'
import * as TYPES from '../../../redux/constants/DragDrop'
import { FileUpload, useCards, PreviewButton } from '.'
import './DragDrop.css'

export const DragDrop = () => {
  const dispatch = useDispatch()
  const { cardList, fieldWidth, fieldHeight, tempWidth, tempHeight } = useSelector((store) => store.dragdrop)

  const { cards, thumbs } = useCards()

  useEffect(() => {
    dispatch({ type: TYPES.DD_INIT_CARDS_SAGA })
    // eslint-disable-next-line
  }, [])

  const handleTempWidth = (e) => {
    dispatch({ type: TYPES.DD_SET_TEMP_WIDTH, payload: Number(e.target.value.split(' ').at(-1)) })
  }

  const handleTempHeight = (e) => {
    dispatch({ type: TYPES.DD_SET_TEMP_HEIGHT, payload: Number(e.target.value.split(' ').at(-1)) })
  }

  const handleSetField = () => {
    dispatch({ type: TYPES.DD_SET_FIELD_SAGA })
  }

  const handleDefaultField = () => {
    dispatch({ type: TYPES.DD_SET_DEFAULT_FIELD })
  }

  const handleClearChart = () => {
    dispatch({ type: TYPES.DD_CLEAR_CHART })
  }

  const handleSaveFile = () => {
    dispatch({ type: TYPES.DD_SAVE_FILE_SAGA })
  }
  const handleFirstDragStart = (e) => {
    dispatch({ type: TYPES.DD_FIRST_DRAG_START_SAGA, payload: e })
  }

  const handleFirstDragEnd = () => {
    dispatch({ type: TYPES.DD_FIRST_DRAG_END })
  }

  const saveSizeDisabled = fieldWidth === tempWidth && fieldHeight === tempHeight

  return (
    <DndProvider backend={HTML5Backend}>
      <PageHeader display={true} title="sidenav.menu.dragdrop" />
      <div className="dragdrop-container">
        <div className="size-inputs">
          <Input value={`Width: ${tempWidth}`} className="card-button" onChange={handleTempWidth} />
          <Input value={`Height: ${tempHeight}`} className="card-button" onChange={handleTempHeight} />
          <Button className="card-button" disabled={saveSizeDisabled} onClick={() => handleSetField(false)}>
            Save size
          </Button>
          <Button className="card-button" onClick={handleDefaultField}>
            Default size
          </Button>
          <hr className="card-button" />
          <Button className="card-button" disabled={!cardList.length} onClick={handleClearChart}>
            Clear chart
          </Button>
          <hr className="card-button" />
          <Button className="card-button" onClick={handleSaveFile}>
            Save file
          </Button>

          <FileUpload />
        </div>

        <div className="buttons-container" onDragStart={handleFirstDragStart} onDragEnd={handleFirstDragEnd}>
          {thumbs.map((thumb) => (
            <PreviewButton key={thumb.src} thumb={thumb} />
          ))}
        </div>

        {cards}
      </div>
    </DndProvider>
  )
}

export default DragDrop
