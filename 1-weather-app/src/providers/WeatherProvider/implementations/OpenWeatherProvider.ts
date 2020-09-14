import Axios from 'axios'
import City from '../../../entities/City'
import IWeatherProvider, { IWeatherOptions } from '../IWeatherProvider'

export interface OpenWeatherApiResponse {
  name: string
  sys: {
    country: string
  }
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  weather: {
    icon: string
    description: string
  }[]
}

export default class OpenWeatherProvider implements IWeatherProvider {
  private api = Axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
  })

  async getWeatherByCityName(
    name: string,
    opts: IWeatherOptions = { unit: 'metric' }
  ) {
    try {
      const { data } = await this.api.get<OpenWeatherApiResponse>(
        `/weather?q=${name}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=${opts.unit}`
      )

      if (!data) {
        throw new Error('NO DATA FOUND FROM OPEN WEATHER API')
      }

      const city = new City({
        name: data.name,
        climateDescription: data.weather[0].description,
        climateIcon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`,
        country: data.sys.country,
        humidity: data.main.humidity,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        temperature: data.main.temp,
      })

      return city
    } catch (error) {
      throw error
    }
  }
}
