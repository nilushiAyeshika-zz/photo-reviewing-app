import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

import RouteConfig from '../../../routeConfig/RouteConfig'

import MainStyles from './Main.theme'
import 'react-toastify/dist/ReactToastify.css'

const Main: FC = () => {
  return (
    <MainStyles className="main-wrapper" data-test="main-container">
      <RouteConfig data-test="route-config-component" />
      <ToastContainer data-test="toast-component" />
    </MainStyles>
  )
}

export default Main
