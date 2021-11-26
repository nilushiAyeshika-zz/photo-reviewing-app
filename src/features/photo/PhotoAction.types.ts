import { IPhoto } from '../../containers/photo/Photo.types'

export const ADD_APPROVE_PHOTO = 'ADD_APPROVE_PHOTO'
export const ADD_APPROVE_PHOTO_SUCCESS = 'ADD_APPROVE_PHOTO_SUCCESS'
export const ADD_APPROVE_PHOTO_ERROR = 'ADD_APPROVE_PHOTO_ERROR'

export const ADD_REJECT_PHOTO = 'ADD_REJECT_PHOTO'
export const ADD_REJECT_PHOTO_SUCCESS = 'ADD_REJECT_PHOTO_SUCCESS'
export const ADD_REJECT_PHOTO_ERROR = 'ADD_REJECT_PHOTO_ERROR'

export interface IAddApprovePhoto {
  type: typeof ADD_APPROVE_PHOTO
}

export interface IAddApprovePhotoSuccess {
  type: typeof ADD_APPROVE_PHOTO_SUCCESS
  payload: IPhoto
}

export interface IAddApprovePhotoError {
  type: typeof ADD_APPROVE_PHOTO_ERROR
}

export interface IAddRejectPhoto {
  type: typeof ADD_REJECT_PHOTO
}

export interface IAddRejectPhotoSuccess {
  type: typeof ADD_REJECT_PHOTO_SUCCESS
  payload: IRejectPhoto
}

export interface IAddRejectPhotoError {
  type: typeof ADD_REJECT_PHOTO_ERROR
}

export interface IRejectPhoto {
  id: string
}

export type PhotoDispatchTypes =
  | IAddApprovePhoto
  | IAddApprovePhotoSuccess
  | IAddApprovePhotoError
  | IAddRejectPhoto
  | IAddRejectPhotoSuccess
  | IAddRejectPhotoError
