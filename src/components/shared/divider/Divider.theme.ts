import styled from 'styled-components'

import { DividerProps } from './Divider.types'

const DividerStyles = styled.div<DividerProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height : ${(props) => (props.height ? props.height : '0.2rem')};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.colors.DEFAULT_DIVIDER_BG)};
  ${(props) => props.margin && `margin: ${props.margin};`}
`

export default DividerStyles
