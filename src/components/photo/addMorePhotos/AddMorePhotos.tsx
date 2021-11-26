import { FC, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Button from '../../core/button/Button'

import AddMorePhotosProps from './AddMorePhotos.types'
import AddMorePhotoStyles from './AddMorePhotos.theme'

const AddMorePhotos: FC<AddMorePhotosProps> = (props) => {
  const { className, size = 'large', margin, onAddMore } = props

  const handleAddPhotoClick = useCallback(() => {
    onAddMore?.()
  }, [onAddMore])

  return (
    <AddMorePhotoStyles
      data-test="add-more-photo-wrapper"
      className={className}
      size={size}
      margin={margin}
    >
      <Button
        variation="text"
        onClick={handleAddPhotoClick}
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        hoverColor="transparent"
        textColor="typo-default-light"
        className="plus-button"
        data-test="add-more-button"
      />
    </AddMorePhotoStyles>
  )
}

export default AddMorePhotos
