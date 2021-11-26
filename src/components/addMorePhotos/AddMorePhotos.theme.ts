import styled from 'styled-components'

import { getAddMoreContainerHeight, getAddMoreContainerWidth, getAddMoreContainerFontSize } from '../../utils/Theme.utils'

import AddMorePhotosProps from './AddMorePhotos.types'
import { appTheme } from '../../theme/Theme'

const AddMorePhotoStyles = styled.div<AddMorePhotosProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${appTheme.colors.DEFAULT_BG};
  height: ${(props) => (getAddMoreContainerHeight(props.size))};
  width: ${(props) => (getAddMoreContainerWidth(props.size))};
  border-radius: 0.5rem;
  ${(props) => props.margin && `margin: ${props.margin}`};
  position: relative;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    svg {
      margin-right: 0 !important;
      font-size: ${(props) => (getAddMoreContainerFontSize(props.size))};
    }
  }
`

export default AddMorePhotoStyles
