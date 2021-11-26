import { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { IPhotoContext, IPhoto } from './Photo.types'
import { addPhotoApprove, addPhotoReject } from '../../features/photo/PhotoAction'
import PhotoApi from '../../api/PhotoApi'
import { checkValueExits } from '../../utils/CommonFunctions.utils'

export const PhotoContext = createContext<IPhotoContext>({} as IPhotoContext)

const emptyRandomPhoto = {
  id: '',
  description: '',
  thumbUrl: '',
  regularUrl: '',
}

const PhotoProvider = (props: { children: any }) => {
  const { children } = props
  const dispatch = useDispatch()
  const [isPhotoLoading, setIsPhotoLoading] = useState<boolean>(false)
  const [randomPhotoData, setRandomPhotoData] = useState<IPhoto>(emptyRandomPhoto)
  const { rejectedPhotos } = useSelector((state: any) => state.photos)

  /**
   * handle photo approval
   * @param status
   */
  const handlePhotoApproval = (status: boolean) => {
    if (status) {
      dispatch(addPhotoApprove(randomPhotoData))
      toast.success('Approved', {
        autoClose: 1000,
      })
    } else {
      dispatch(addPhotoReject(randomPhotoData.id))
      toast.success('Rejected', {
        autoClose: 1000,
      })
    }
    setRandomPhotoData(emptyRandomPhoto)
  }

  /**
   * fetch random photo
   */
  const fetchRandomPhoto = async () => {
    try {
      const { data }: any = await PhotoApi.getRandomPhoto()
      const photoData: IPhoto = {
        id: data.id,
        description: data.description,
        thumbUrl: data?.urls?.thumb,
        regularUrl: data?.urls?.small,
      }
      if (!checkValueExits(photoData.id, rejectedPhotos)) {
        setRandomPhotoData(photoData)
      } else {
        fetchRandomPhoto()
      }
    } catch (exception) {
      console.error(exception)
    } finally {
      setIsPhotoLoading(false)
    }
  }

  /**
   * handle add more click
   */
  const handleAddPhotoClick = () => {
    setIsPhotoLoading(true)
    fetchRandomPhoto()
  }

  return (
    <PhotoContext.Provider
      value={{
        isPhotoLoading,
        handleAddPhotoClick,
        handlePhotoApproval,
        randomPhotoData,
      }}
    >
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoProvider
