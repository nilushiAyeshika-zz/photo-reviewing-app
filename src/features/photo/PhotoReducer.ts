import {
  ADD_APPROVE_PHOTO,
  ADD_APPROVE_PHOTO_SUCCESS,
  ADD_APPROVE_PHOTO_ERROR,
  ADD_REJECT_PHOTO,
  ADD_REJECT_PHOTO_SUCCESS,
  ADD_REJECT_PHOTO_ERROR,
  PhotoDispatchTypes,
} from './PhotoAction.types'
import { IPhotoDefaultState } from './PhotoReducer.types'

const defaultState: IPhotoDefaultState = {
  approvedPhotos: [],
  rejectedPhotos: [],
}

const PhotoReducer = (
  state: IPhotoDefaultState = defaultState,
  action: PhotoDispatchTypes
): IPhotoDefaultState => {
  switch (action.type) {
    case ADD_APPROVE_PHOTO:
      return {
        ...state,
      }
    case ADD_APPROVE_PHOTO_SUCCESS:
      return {
        ...state,
        approvedPhotos: [...state.approvedPhotos, action.payload],
      }
    case ADD_APPROVE_PHOTO_ERROR:
      return {
        ...state,
      }

    case ADD_REJECT_PHOTO:
      return {
        ...state,
      }
    case ADD_REJECT_PHOTO_SUCCESS:
      return {
        ...state,
        rejectedPhotos: [...state.rejectedPhotos, action.payload],
      }
    case ADD_REJECT_PHOTO_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default PhotoReducer
