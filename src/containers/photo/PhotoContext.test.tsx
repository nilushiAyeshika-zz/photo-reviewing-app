import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { findByTestAttr } from '../../utils/test.utils'
import PhotoProvider, { PhotoContext } from './PhotoContext'
import { store } from '../../store'
import { appTheme } from '../../theme/Theme'

/**
 * Factory function to create a ShallowWrapper for the verification component.
 * @function setup
 * @param { object } testValues - Context values specific to this setup.
 * @return { mount }
 */

const ConsumerComponent = (props: any) => {
  return <></>
}
/**
 * Factory function to create a ReactWrapper for the verification context.
 * @returns {ReactWrapper}
 */
const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <PhotoProvider>
            <PhotoContext.Consumer>
              {(values: any) => <ConsumerComponent {...values} data-test="consumer-component" />}
            </PhotoContext.Consumer>
          </PhotoProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<PhotoContext/>', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup()
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test('test initial state', () => {
    const component = findByTestAttr(wrapper, 'consumer-component')

    const { isPhotoLoading, handleAddPhotoClick, handlePhotoApproval, randomPhotoData } =
      component.props()

    expect(isPhotoLoading).toBeFalsy()
    expect(typeof randomPhotoData).toBe('object')
    expect(typeof handleAddPhotoClick).toBe('function')
    expect(typeof handlePhotoApproval).toBe('function')
  })
})
