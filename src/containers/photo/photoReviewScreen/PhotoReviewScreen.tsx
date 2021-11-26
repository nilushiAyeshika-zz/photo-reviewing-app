import { FC } from 'react'

import PhotoProvider from '../PhotoContext'
import PhotoReviewWrapper from '../../../components/photo/photoReviewWrapper/PhotoReviewWrapper'

const PhotoReviewScreen: FC = () => {
  return (
    <PhotoProvider>
      <div data-test="photo-review-screen">
        <PhotoReviewWrapper data-test="photo-review-component" />
      </div>
    </PhotoProvider>
  )
}

export default PhotoReviewScreen
