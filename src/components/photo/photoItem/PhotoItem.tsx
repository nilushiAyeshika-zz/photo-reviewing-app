import { FC } from 'react'
import classnames from 'classnames'

import IPhotoItem from './PhotoItem.types'
import PhotoItemStyles from './PhotoItem.theme'

const PhotoItem: FC<IPhotoItem> = (props) => {
  const { className, imgSrc, imgName, size = 'large', margin } = props

  return (
    <PhotoItemStyles
      data-test="photo-item-component"
      className={classnames(className, size === 'large' ? 'image-large' : 'image-small')}
      size={size}
      imgSrc={imgSrc}
      imgName={imgName}
      margin={margin}
    >
      <img src={imgSrc} alt={imgName} className="photo-item" data-test="image-element" />
    </PhotoItemStyles>
  )
}

export default PhotoItem
