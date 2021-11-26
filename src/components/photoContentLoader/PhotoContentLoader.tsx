import ContentLoader from 'react-content-loader'

import { PhotoContentLoaderStyles } from './PhotoContentLoader.theme'

const PhotoContentLoader = () => (
  <PhotoContentLoaderStyles>
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="582" cy="549" r="15" />
      <rect x="478" y="531" rx="2" ry="2" width="140" height="10" />
      <rect x="489" y="535" rx="2" ry="2" width="140" height="10" />
      <rect x="-18" y="-8" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  </PhotoContentLoaderStyles>
)

export default PhotoContentLoader
