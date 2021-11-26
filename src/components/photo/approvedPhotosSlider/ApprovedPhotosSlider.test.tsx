import { shallow } from 'enzyme'

import ApprovedPhotosSlider from './ApprovedPhotosSlider'
import { findByTestAttr } from '../../../utils/test.utils'

const approvedPhotos = [
  {
    id: 'GcuvEMEIRqE',
    description: 'Waterfall scene',
    thumbUrl:
      'https://images.unsplash.com/photo-1637822412463-65d4af2c910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc3Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc5NjAxMTI&ixlib=rb-1.2.1&q=80&w=200',
    regularUrl:
      'https://images.unsplash.com/photo-1637822412463-65d4af2c910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc3Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc5NjAxMTI&ixlib=rb-1.2.1&q=80&w=400',
  },
]

const defaultProps = {
  approvedPhotos,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<ApprovedPhotosSlider {...setupProps} />)
}

describe('<ApprovedPhotosSlider/>', () => {
  const wrapper = setup(defaultProps)
  test('test approved photo component render', () => {
    const element = findByTestAttr(wrapper, 'approved-photo-component')
    expect(element.exists()).toBeTruthy()
  })
  test('test slider component ', () => {
    const element = findByTestAttr(wrapper, 'photo-slider-component')
    expect(element.exists()).toBeTruthy()
  })

  test('test approved icon ', () => {
    const element = findByTestAttr(wrapper, 'approved-icon')
    expect(element.exists()).toBeTruthy()
  })

  test('test approved photo item component ', () => {
    const element = findByTestAttr(wrapper, 'approved-photo')
    expect(element.exists()).toBeTruthy()
  })
})
