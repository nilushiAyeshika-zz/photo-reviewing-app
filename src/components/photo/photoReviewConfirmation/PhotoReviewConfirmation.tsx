import { FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

import { PhotoContext } from '../../../containers/photo/PhotoContext'
import PhotoItem from '../../photoItem/PhotoItem'
import Divider from '../../shared/divider/Divider.component'
import Button from '../../core/button/Button.component'
import Grid from '../../layout/grid/Grid.component'

import PhotoReviewConfirmationStyles from './PhotoReviewConfiration.theme'

const PhotoReviewConfirmation: FC = () => {
  const { handlePhotoApproval, randomPhotoData } = useContext(PhotoContext)
  
  return (
    <PhotoReviewConfirmationStyles data-test="image">
      <Grid className="photo-item-wrapper">
        <PhotoItem
          imgSrc={randomPhotoData.thumbUrl}
          imgName={randomPhotoData.description}
          size="large"
          margin="2rem 0"
        />
      </Grid>
      <Divider margin="1rem 0" />
      <Grid className="review-button-wrapper">
        <Button
          variation="warning"
          onClick={() => handlePhotoApproval(false)}
          startIcon={<FontAwesomeIcon icon={faTimes} />}
          className="decline-button"
        />
        <Button
          onClick={() => handlePhotoApproval(true)}
          startIcon={<FontAwesomeIcon icon={faCheck} />}
          className="confirm-button"
        />
      </Grid>
    </PhotoReviewConfirmationStyles>
  )
}

export default PhotoReviewConfirmation
