import { FC } from 'react'
import Slider from 'react-slick'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import IApprovedPhotos from './ApprovedPhotosSlider.types'
import PhotoItem from '../photoItem/PhotoItem'
import { IPhoto } from '../../../containers/photo/Photo.types'
import Grid from '../../layout/grid/Grid'

import ApprovedPhotosStyles from './ApprovedPhotosSlider.theme'

const ApprovedPhotosSlider: FC<IApprovedPhotos> = (props) => {
  const { approvedPhotos } = props

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <ApprovedPhotosStyles
      data-test="approved-photo-component"
      className={classnames({ 'has-more-data': approvedPhotos.length > 0 })}
    >
      <Slider {...settings} data-test="photo-slider-component">
        {approvedPhotos.map((photoData: IPhoto, index: number) => (
          <Grid key={index} className="accepted-photo-wrapper">
            <FontAwesomeIcon icon={faCheck} data-test="approved-icon" />
            <PhotoItem
              key={index}
              imgSrc={photoData.thumbUrl}
              imgName={photoData.description}
              size="small"
              className="accepted-photo-item"
              data-test="approved-photo"
            />
          </Grid>
        ))}
      </Slider>
    </ApprovedPhotosStyles>
  )
}

export default ApprovedPhotosSlider
