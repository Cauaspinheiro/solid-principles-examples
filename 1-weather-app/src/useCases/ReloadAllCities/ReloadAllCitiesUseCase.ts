import IWeatherProvider from '../../providers/WeatherProvider/IWeatherProvider'
import ICitiesRepository from '../../repositories/CitiesRepository/ICitiesRepository'

export interface IReloadAllCitiesUseCaseProps {
  weatherProvider: IWeatherProvider
  citiesRepository: ICitiesRepository
}

export default class ReloadAllCitiesUseCase {
  private weatherProvider: IWeatherProvider
  private citiesRepository: ICitiesRepository

  constructor(props: IReloadAllCitiesUseCaseProps) {
    this.citiesRepository = props.citiesRepository
    this.weatherProvider = props.weatherProvider
  }

  async reloadAllCities() {
    const cities = await this.citiesRepository.getAllCities()

    const promises = cities.map((city) =>
      this.weatherProvider.getWeatherByCityName(city.name)
    )

    return Promise.all(promises)
  }
}
