import { FC, useContext } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { PhotoContext } from '../../../containers/photo/PhotoContext'
import AddMorePhotos from '../addMorePhotos/AddMorePhotos'
import PhotoReviewConfirmation from '../photoReviewConfirmation/PhotoReviewConfirmation'
import Divider from '../../shared/divider/Divider'
import Grid from '../../layout/grid/Grid'
import Text from '../../core/text/Text'
import PhotoContentLoader from '../../photoContentLoader/PhotoContentLoader'
import ApprovedPhotosSlider from '../approvedPhotosSlider/ApprovedPhotosSlider'

import PhotoReviewWrapperStyles from './PhotoReviewWrapper.theme'

const PhotoReviewWrapper: FC = () => {
  const { isPhotoLoading, randomPhotoData, handleAddPhotoClick } = useContext(PhotoContext)
  const { approvedPhotos } = useSelector((state: any) => state.photos)

  return (
    <PhotoReviewWrapperStyles data-test="photo-review-wrapper">
      <Grid direction="column">
        <Text color="typo-primary" weight="bold" size="l" data-test="photo-review-header">
          IMAGE APPROVAL APPLICATION
        </Text>
        <Divider margin="1rem 0" />
        <Text
          color="typo-primary"
          weight="bold"
          size="m"
          letterSpacing="0.05rem"
          data-test="approved-list-header"
        >
          APPROVED IMAGES ({approvedPhotos.length})
        </Text>
        {approvedPhotos.length > 0 ? (
          <ApprovedPhotosSlider
            approvedPhotos={approvedPhotos}
            data-test="approved-photo-slider-component"
          />
        ) : (
          <AddMorePhotos
            size="small"
            margin="2rem 0"
            onAddMore={handleAddPhotoClick}
            data-test="add-photo-component-top"
          />
        )}
      </Grid>
      <Divider data-test="divider-component" />

      <Grid direction="column" alignItems="center">
        {isPhotoLoading ? (
          <PhotoContentLoader />
        ) : (
          <Grid direction="column">
            {randomPhotoData.id !== '' ? (
              <PhotoReviewConfirmation data-test="photo-review-confirmation-component" />
            ) : (
              <>
                <Grid justifyContent="center" className="add-main-wrapper">
                  <AddMorePhotos
                    size="large"
                    margin="2rem 0"
                    onAddMore={handleAddPhotoClick}
                    data-test="add-photo-component-main"
                  />
                </Grid>

                <Divider />
                <Grid margin="4rem 0" direction="column">
                  <Text textAlign="center" data-test="photo-review-note" className="main-text">
                    Click on the <FontAwesomeIcon icon={faPlus} /> in order to get image
                  </Text>
                  <Text textAlign="center">recommendations</Text>
                </Grid>
              </>
            )}
          </Grid>
        )}
      </Grid>
    </PhotoReviewWrapperStyles>
  )
}

export default PhotoReviewWrapper
