import { FC } from 'react'
import Slider from "react-slick"
import classnames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import IApprovedPhotos from './ApprovedPhotosSlider.types'
import PhotoItem from '../../photoItem/PhotoItem'
import { IPhoto } from '../../../containers/photo/Photo.types'
import Grid from '../../layout/grid/Grid.component'

import ApprovedPhotosStyles from './ApprovedPhotosSlider.theme'

const ApprovedPhotosSlider: FC<IApprovedPhotos> = (props) => {
  const { approvedPhotos } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <ApprovedPhotosStyles data-test="photo-approved-component" className={classnames({ 'has-more-data': approvedPhotos.length > 0 })}>
      <Slider {...settings}>
        {approvedPhotos.map((photoData: IPhoto, index: number) => (
          <Grid key={index} className="accepted-photo-wrapper">
            <FontAwesomeIcon icon={faCheck} />
            <PhotoItem
              key={index}
              imgSrc={photoData.thumbUrl}
              imgName={photoData.description}
              size="small"
              className="accepted-photo-item"
            />
          </Grid>
        ))}
      </Slider>
    </ApprovedPhotosStyles>
  )
}

export default ApprovedPhotosSlider
