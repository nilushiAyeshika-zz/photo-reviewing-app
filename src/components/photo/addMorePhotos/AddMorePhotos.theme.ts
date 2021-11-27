import styled from 'styled-components'

import AddMorePhotosProps from './AddMorePhotos.types'
import { appTheme } from '../../../theme/Theme'

const AddMorePhotoStyles = styled.div<AddMorePhotosProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${appTheme.colors.DEFAULT_BG};
  border-radius: 0.5rem;
  ${(props) => props.margin && `margin: ${props.margin}`};
  position: relative;

  &.container-large {
    height: 40rem;
    width: 100%;

    svg {
      font-size: 6rem;
    }
  }

  &.container-small {
    height: 5rem;
    width: 8rem;

    svg {
      font-size: 2rem;
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    svg {
      margin-right: 0 !important;
    }
  }
`

export default AddMorePhotoStyles
