import { shallow } from 'enzyme'

import AddMorePhotos from './AddMorePhotos'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const onAddMore = jest.fn()
const margin = '10px'
const size = 'large'

const defaultProps = {
  className,
  size,
  margin,
  onAddMore,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<AddMorePhotos {...setupProps} />)
}

describe('<AddMorePhotos/>', () => {
  const wrapper = setup(defaultProps)
  test('test add more photo wrapper', () => {
    const element = findByTestAttr(wrapper, 'add-more-photo-wrapper')
    expect(element.exists()).toBeTruthy()
  })
  test('test add more button ', () => {
    const element = findByTestAttr(wrapper, 'add-more-button')
    expect(element.exists()).toBeTruthy()
  })
})
