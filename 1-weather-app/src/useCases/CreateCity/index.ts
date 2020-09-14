import OpenWeatherProvider from '../../providers/WeatherProvider/implementations/OpenWeatherProvider'
import LocalStorageRepository from '../../repositories/CitiesRepository/implementations/LocalStorageRepository'
import CreateCityController from './CreateCityController'
import CreateCityUseCase from './CreateCityUseCase'

const localStorageRepository = new LocalStorageRepository()
const openWeatherProvider = new OpenWeatherProvider()

export const createCityUseCase = new CreateCityUseCase({
  citiesRepository: localStorageRepository,
  weatherProvider: openWeatherProvider,
})

export const createCityController = new CreateCityController({
  createCityUseCase,
})
