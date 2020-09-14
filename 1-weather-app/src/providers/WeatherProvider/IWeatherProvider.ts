import City from '../../entities/City'

export interface IWeatherOptions {
  unit: WeatherUnits
}

export default interface IWeatherProvider {
  getWeatherByCityName(cityName: string, opts?: IWeatherOptions): Promise<City>
}
