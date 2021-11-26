import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import PhotoReviewScreen from './PhotoReviewScreen'
import { findByTestAttr } from '../../../utils/test.utils'
import { store } from '../../../store'
import { appTheme } from '../../../theme/Theme'

const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <PhotoReviewScreen />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<PhotoReviewScreen/>', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup()
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('test render photo review screen without error', () => {
    const component = findByTestAttr(wrapper, 'photo-review-screen')
    expect(component.exists()).toBe(true)
  })

  test('test photo review component', () => {
    const component = findByTestAttr(wrapper, 'photo-review-component')
    expect(component.exists()).toBe(true)
  })
})
