import styled from 'styled-components'

import { appTheme  } from '../../../theme/Theme'

const ApprovedPhotosStyles = styled.div`
  display: block;
  margin: 2rem 0;

  &.has-more-data {
    padding: 0 2rem;
  }

  .slick-prev:before, .slick-next:before {
    color: ${appTheme.colors.TYPOGRAPHY_PRIMARY}
  }

  .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
    display: none;
  }

  .slick-track {
    margin-left: 0;
    margin-right: 0;
  }

  .accepted-photo-item {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      background: ${appTheme.colors.DEFAULT_TRANSPARENT_BG};
      z-index: 1;
      height: 100%;
      width: 100%;
    }
  }

  .accepted-photo-wrapper {
    position: relative;

    svg {
      color: ${appTheme.colors.TYPOGRAPHY_LIGHT};
      position: absolute;
      right: 1.2rem;
      top: 0;
      z-index: 2;
      font-size: 1.2rem;
    }
  }

  .slick-slide img {
    object-fit: cover;
  }
}
`

export default ApprovedPhotosStyles

