import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

import IPhotoItem from './PhotoItem.types'

const PhotoItemStyles = styled.div<IPhotoItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.margin && `margin: ${props.margin}`};
  background: ${appTheme.colors.DEFAULT_BG};
  border-radius: 0.5rem;

  &.image-large {
    height: 40rem;
    width: auto;

    img {
      height: 40rem;
      width: auto;
    }
  }

  &.image-small {
    height: 5rem;
    width: 8rem;

    img {
      height: 5rem;
      width: 8rem;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }
`

export default PhotoItemStyles
