import axios from 'axios'

import ApiHelper from '../helpers/ApiHelper'
import { IConfig } from './Photo.types'

class PhotoAPI {
  /**
   * random photo using unsplash service
   */
  getRandomPhoto = async () => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_PHOTO_SERVICES}/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      method: 'get',
    }

    return axios.request(config as IConfig)
  }
}

export default new PhotoAPI()
