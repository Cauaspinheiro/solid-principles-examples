import OpenWeatherProvider from '../../providers/WeatherProvider/implementations/OpenWeatherProvider'
import LocalStorageRepository from '../../repositories/CitiesRepository/implementations/LocalStorageRepository'
import CreateCityController from './CreateCityController'
import CreateCityUseCase from './CreateCityUseCase'

const localStorageRepository = new LocalStorageRepository()
const openWeatherProvider = new OpenWeatherProvider()

const createCityUseCase = new CreateCityUseCase({
  citiesRepository: localStorageRepository,
  weatherProvider: openWeatherProvider,
})

const createCityController = new CreateCityController({ createCityUseCase })

export default { createCityUseCase, createCityController }
