import { combineReducers } from 'redux'
import PhotoReducer from './features/photo/PhotoReducer'

const RootReducer = combineReducers({
  photos: PhotoReducer,
})

export default RootReducer
