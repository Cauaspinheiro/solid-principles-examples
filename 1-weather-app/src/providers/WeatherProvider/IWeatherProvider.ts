import City from '../../entities/City'

export interface IWeatherReqData {
  city: string
  unit: string
}

export default interface IWeatherProvider {
  getWeatherByCityName(req: IWeatherReqData): Promise<City>
}
