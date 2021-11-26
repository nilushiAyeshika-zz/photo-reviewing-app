import { FC, useContext } from 'react'
import { useSelector } from 'react-redux'

import { PhotoContext } from '../../../containers/photo/PhotoContext'
import AddMorePhotos from '../../addMorePhotos/AddMorePhotos'
import PhotoReviewConfirmation from '../photoReviewConfirmation/PhotoReviewConfirmation'
import Divider from '../../shared/divider/Divider.component'
import Grid from '../../layout/grid/Grid.component'
import Text from '../../core/text/Text.component'
import PhotoContentLoader from '../../photoContentLoader/PhotoContentLoader'
import ApprovedPhotosSlider from '../approvedPhotosSlider/ApprovedPhotosSlider'

import PhotoReviewWrapperStyles from './PhotoReviewWrapper.theme'

const PhotoReviewWrapper: FC = () => {
  const { isPhotoLoading, randomPhotoData, handleAddPhotoClick } = useContext(PhotoContext)
  const { approvedPhotos } = useSelector((state: any) => state.photos)

  return (
    <PhotoReviewWrapperStyles data-test="photo-review-component">
      <Grid direction="column">
        <Text color="typo-primary" weight="bold" size="l">IMAGE APPROVAL APPLICATION</Text>
        <Divider margin="1rem 0" />
        <Text color="typo-primary" weight="bold" size="m" letterSpacing="0.05rem">APPROVED IMAGES ({approvedPhotos.length})</Text>
        {approvedPhotos.length > 0 ? (
          <ApprovedPhotosSlider approvedPhotos={approvedPhotos} />
        ) : (
          <AddMorePhotos size="small" margin="2rem 0" onAddMore={handleAddPhotoClick} />
        )}
      </Grid>
      <Divider />

      <Grid direction="column" alignItems="center">
        {isPhotoLoading ? (
          <PhotoContentLoader />
        ) : (
          <Grid direction="column">
            {randomPhotoData.id !== '' ? (
              <PhotoReviewConfirmation />
            ) : (
              <>
                <Grid justifyContent="center" className="add-main-wrapper">
                  <AddMorePhotos size="large" margin="2rem 0" onAddMore={handleAddPhotoClick} />
                </Grid>

                <Divider />
                <Text textAlign="center" margin="4rem 0">Click on the + in order to get image recommendations</Text>
              </>
            )}
          </Grid>
        )}
      </Grid>
    </PhotoReviewWrapperStyles>
  )
}

export default PhotoReviewWrapper
