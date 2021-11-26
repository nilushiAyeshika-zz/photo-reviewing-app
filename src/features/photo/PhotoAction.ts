import { Dispatch } from 'redux'

import {
  ADD_APPROVE_PHOTO,
  ADD_APPROVE_PHOTO_SUCCESS,
  ADD_APPROVE_PHOTO_ERROR,
  ADD_REJECT_PHOTO,
  ADD_REJECT_PHOTO_SUCCESS,
  ADD_REJECT_PHOTO_ERROR,
  IRejectPhoto,
  PhotoDispatchTypes,
} from './PhotoAction.types'
import { IPhoto } from '../../containers/photo/Photo.types'

export const addPhotoApprove = (data: IPhoto) => async (dispatch: Dispatch<PhotoDispatchTypes>) => {
  try {
    dispatch({
      type: ADD_APPROVE_PHOTO,
    })
    dispatch({
      type: ADD_APPROVE_PHOTO_SUCCESS,
      payload: data,
    })
  } catch (e) {
    dispatch({
      type: ADD_APPROVE_PHOTO_ERROR,
    })
  }
}

export const addPhotoReject =
  (data: IRejectPhoto) => async (dispatch: Dispatch<PhotoDispatchTypes>) => {
    try {
      dispatch({
        type: ADD_REJECT_PHOTO,
      })
      dispatch({
        type: ADD_REJECT_PHOTO_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: ADD_REJECT_PHOTO_ERROR,
      })
    }
  }
