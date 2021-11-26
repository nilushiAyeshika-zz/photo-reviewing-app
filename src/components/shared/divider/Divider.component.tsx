import React from 'react'

import { DividerProps } from './Divider.types'
import DividerStyles from './Divider.theme'

const Divider: React.FC<DividerProps> = (props) => {
  const {
    className,
    width,
    height,
    backgroundColor,
    margin,
  } = props

  return (
    <DividerStyles
      className={className}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      margin={margin}
      data-test="divider-component"
    />
  )
}

export default Divider
