import styled from 'styled-components'

const PhotoReviewWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;

  .photo-item-wrapper {
    border-radius: 0.5rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .review-button-wrapper {
    margin-top: 1rem;
    justify-content: space-between;
  }

  .decline-button, .confirm-button {
    width: 17rem;
    border-radius: 5rem;
    svg {
      margin-right: 0;
      font-size: 2rem;
    }
  }
}
`

export default PhotoReviewWrapperStyles

