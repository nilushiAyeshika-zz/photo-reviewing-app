import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import PhotoReviewConfirmation from './PhotoReviewConfirmation'
import PhotoProvider from '../../../containers/photo/PhotoContext'
import { findByTestAttr } from '../../../utils/test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const defaultStoreState = {
  photos: {
    approvedPhotos: [],
    rejectedPhotos: [],
  },
}

const setup = (defaultStore = {}) => {
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <PhotoProvider>
            <PhotoReviewConfirmation />
          </PhotoProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<PhotoReviewConfirmation/>', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultStoreState)
  })

  test('test photo review confirmation load', () => {
    const component = findByTestAttr(wrapper, 'photo-review-confirmation')
    expect(component.exists()).toBe(true)
  })

  test('test photo component', () => {
    const component = findByTestAttr(wrapper, 'photo-component')
    expect(component.exists()).toBe(true)
  })

  test('test divider', () => {
    const component = findByTestAttr(wrapper, 'divider-component')
    expect(component.exists()).toBe(true)
  })

  describe('buttom wrapper', () => {
    test('test button section', () => {
      const component = findByTestAttr(wrapper, 'button-wrapper')
      expect(component.exists()).toBe(true)
    })

    test('test reject button', () => {
      const component = findByTestAttr(wrapper, 'reject-button')
      expect(component.exists()).toBe(true)
    })

    test('test approve button', () => {
      const component = findByTestAttr(wrapper, 'approve-button')
      expect(component.exists()).toBe(true)
    })
  })
})
