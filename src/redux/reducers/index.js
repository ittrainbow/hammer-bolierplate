import { combineReducers } from '@reduxjs/toolkit'
import Auth from './Auth'
import Theme from './Theme'
import App from './App'
import DragDrop from './DragDrop'

const rootReducer = combineReducers({
  app: App,
  theme: Theme,
  auth: Auth,
  dragdrop: DragDrop
})

export default rootReducer
