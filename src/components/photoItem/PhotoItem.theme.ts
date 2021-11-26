import styled from 'styled-components'

import { getPhotoItemHeight, getPhotoItemWidth } from '../../utils/Theme.utils'
import { appTheme } from '../../theme/Theme';

import IPhotoItem from './PhotoItem.types';

const PhotoItemStyles = styled.div<IPhotoItem>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (getPhotoItemHeight(props.size))};
    width: ${(props) => (getPhotoItemWidth(props.size))};
    ${(props) => props.margin && `margin: ${props.margin}`};
    background: ${appTheme.colors.DEFAULT_BG};
    border-radius: 0.5rem;

    img {
      height: ${(props) => (getPhotoItemHeight(props.size))};
      width: ${(props) => (getPhotoItemWidth(props.size))};
      max-width: 100%;
      object-fit: contain;
    }
`

export default PhotoItemStyles
