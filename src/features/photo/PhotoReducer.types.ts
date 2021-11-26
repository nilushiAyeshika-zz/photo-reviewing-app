import { IPhoto } from '../../containers/photo/Photo.types'
import { IRejectPhoto } from './PhotoAction.types'

export interface IPhotoDefaultState {
  approvedPhotos: IPhoto[]
  rejectedPhotos: IRejectPhoto[]
}
