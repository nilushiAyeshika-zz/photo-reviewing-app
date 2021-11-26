import { shallow } from 'enzyme'

import PhotoItem from './PhotoItem'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const imgSrc =
  'https://images.unsplash.com/photo-1637822412463-65d4af2c910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc3Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc5NjAxMTI&ixlib=rb-1.2.1&q=80&w=200'
const margin = '10px'
const size = 'large'
const imgName = 'sample'

const defaultProps = {
  className,
  imgSrc,
  imgName,
  size,
  margin,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<PhotoItem {...setupProps} />)
}

describe('<PhotoItem/>', () => {
  const wrapper = setup(defaultProps)
  test('test photo component render', () => {
    const element = findByTestAttr(wrapper, 'photo-item-component')
    expect(element.exists()).toBeTruthy()
  })
  test('test image element ', () => {
    const element = findByTestAttr(wrapper, 'image-element')
    expect(element.exists()).toBeTruthy()
  })
})
