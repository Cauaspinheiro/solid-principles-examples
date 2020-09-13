import ICreateCityDTO from './CreateCityDTO'
import IWeatherProvider from '../../providers/WeatherProvider/IWeatherProvider'
import ICitiesRepository from '../../repositories/CitiesRepository/ICitiesRepository'
import City from '../../entities/City'

export interface ICreateCityUseCaseProps {
  weatherProvider: IWeatherProvider
  citiesRepository: ICitiesRepository
}

export default class CreateCityUseCase {
  private weatherProvider: IWeatherProvider
  private citiesRepository: ICitiesRepository

  constructor(props: ICreateCityUseCaseProps) {
    this.weatherProvider = props.weatherProvider
    this.citiesRepository = props.citiesRepository
  }

  async createCity(data: ICreateCityDTO) {
    const cityAlreadyExists = await this.citiesRepository.findByName(data.name)

    if (cityAlreadyExists) {
      return {
        error: 'City already exists',
        city: cityAlreadyExists,
      }
    }

    const weatherApiObject = await this.weatherProvider.getWeatherByCityName({
      city: data.name,
      unit: data.unit,
    })

    const city = new City(weatherApiObject)

    this.citiesRepository.save(city)

    return {
      city,
    }
  }
}
