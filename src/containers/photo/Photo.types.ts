export interface IPhotoContext {
  isPhotoLoading: boolean
  randomPhotoData: IPhoto
  handleAddPhotoClick: () => void
  handlePhotoApproval: (status: boolean) => void
}

export interface IPhoto {
  id: any
  description: any
  thumbUrl: any
  regularUrl: any
}
