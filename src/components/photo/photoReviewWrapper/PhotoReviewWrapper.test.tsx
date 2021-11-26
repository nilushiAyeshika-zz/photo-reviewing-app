import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import PhotoReviewWrapper from './PhotoReviewWrapper'
import PhotoProvider from '../../../containers/photo/PhotoContext'
import { findByTestAttr } from '../../../utils/test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const approvedPhotosArray = [
  {
    id: 'GcuvEMEIRqE',
    description: 'Waterfall scene',
    thumbUrl:
      'https://images.unsplash.com/photo-1637822412463-65d4af2c910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc3Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc5NjAxMTI&ixlib=rb-1.2.1&q=80&w=200',
    regularUrl:
      'https://images.unsplash.com/photo-1637822412463-65d4af2c910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc3Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc5NjAxMTI&ixlib=rb-1.2.1&q=80&w=400',
  },
]

const rejectedPhotosArray = ['GwF2raDtoI0']

const defaultStoreState = {
  photos: {
    approvedPhotos: [],
    rejectedPhotos: [],
  },
}

const customStoreState = {
  photos: {
    approvedPhotos: approvedPhotosArray,
    rejectedPhotos: rejectedPhotosArray,
  },
}

const setup = (defaultStore = {}) => {
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <PhotoProvider>
            <PhotoReviewWrapper />
          </PhotoProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<PhotoReviewWrapper/>', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultStoreState)
  })

  test('test photo review wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'photo-review-wrapper')
    expect(component.exists()).toBe(true)
  })

  test('test photo review header', () => {
    const component = findByTestAttr(wrapper, 'photo-review-header')
    expect(component.exists()).toBe(true)
  })

  test('test photo review header text', () => {
    const component = findByTestAttr(wrapper, 'approved-list-header')
    expect(component.exists()).toBe(true)
  })

  test('test photo add main component', () => {
    const component = findByTestAttr(wrapper, 'add-photo-component-main')
    expect(component.exists()).toBe(true)
  })

  test('test photo review note', () => {
    const component = findByTestAttr(wrapper, 'photo-review-note')
    expect(component.exists()).toBe(true)
  })

  test('test divider', () => {
    const component = findByTestAttr(wrapper, 'divider-component')
    expect(component.exists()).toBe(true)
  })

  describe('for empty approved photos', () => {
    beforeEach(() => {
      wrapper = setup(defaultStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('top photo add icon should be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'add-photo-component-top')
      expect(emptyMessageElement.length).toBe(1)
    })
    test('photo slider should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'approved-photo-slider-component')
      expect(rowRecords.length).toBe(0)
    })
  })

  describe('for approved photos available', () => {
    beforeEach(() => {
      wrapper = setup(customStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })

    test('photo slider should be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'approved-photo-slider-component')
      expect(rowRecords.length).toBe(1)
    })

    test('top photo add icon should not be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'add-photo-component-top')
      expect(emptyMessageElement.length).toBe(0)
    })
  })
})
