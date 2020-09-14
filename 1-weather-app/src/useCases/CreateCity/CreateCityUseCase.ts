import ICreateCityDTO from './CreateCityDTO'
import IWeatherProvider from '../../providers/WeatherProvider/IWeatherProvider'
import ICitiesRepository from '../../repositories/CitiesRepository/ICitiesRepository'

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
      throw new Error('CITY ALREADY EXISTS')
    }

    const city = await this.weatherProvider.getWeatherByCityName(data.name, {
      unit: data.unit,
    })

    this.citiesRepository.save(city)

    return city
  }
}
