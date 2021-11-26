import { FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

import { PhotoContext } from '../../../containers/photo/PhotoContext'
import PhotoItem from '../photoItem/PhotoItem'
import Divider from '../../shared/divider/Divider'
import Button from '../../core/button/Button'
import Grid from '../../layout/grid/Grid'

import PhotoReviewConfirmationStyles from './PhotoReviewConfirmation.theme'

const PhotoReviewConfirmation: FC = () => {
  const { handlePhotoApproval, randomPhotoData } = useContext(PhotoContext)

  return (
    <PhotoReviewConfirmationStyles data-test="photo-review-confirmation">
      <Grid className="photo-item-wrapper">
        <PhotoItem
          imgSrc={randomPhotoData.thumbUrl}
          imgName={randomPhotoData.description}
          size="large"
          margin="2rem 0"
          data-test="photo-component"
        />
      </Grid>
      <Divider margin="1rem 0" data-test="divider-component" />
      <Grid className="review-button-wrapper" data-test="button-wrapper">
        <Button
          variation="warning"
          onClick={() => handlePhotoApproval(false)}
          startIcon={<FontAwesomeIcon icon={faTimes} />}
          className="decline-button"
          data-test="reject-button"
        />
        <Button
          onClick={() => handlePhotoApproval(true)}
          startIcon={<FontAwesomeIcon icon={faCheck} />}
          className="confirm-button"
          data-test="approve-button"
        />
      </Grid>
    </PhotoReviewConfirmationStyles>
  )
}

export default PhotoReviewConfirmation
