import { Routes, Route } from 'react-router-dom'

import PhotoReviewScreen from '../containers/photo/photoReviewScreen/PhotoReviewScreen'

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<PhotoReviewScreen />} />
    </Routes>
  )
}

export default RouteConfig
