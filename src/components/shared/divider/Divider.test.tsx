import { shallow } from 'enzyme'

import Divider from './Divider'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const backgroundColor = '#ccc'
const margin = '10px'
const height = '10px'
const width = '12px'

const defaultProps = {
  className,
  width,
  height,
  backgroundColor,
  margin,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<Divider {...setupProps} />)
}

describe('<Divider/>', () => {
  const wrapper = setup(defaultProps)
  test('test divider component render', () => {
    const element = findByTestAttr(wrapper, 'divider-component')
    expect(element.exists()).toBeTruthy()
  })
})
