import OpenWeatherProvider from '../../providers/WeatherProvider/implementations/OpenWeatherProvider'
import LocalStorageRepository from '../../repositories/CitiesRepository/implementations/LocalStorageRepository'
import ReloadAllCitiesController from './ReloadAllCitiesController'
import ReloadAllCitiesUseCase from './ReloadAllCitiesUseCase'

const citiesRepository = new LocalStorageRepository()
const weatherProvider = new OpenWeatherProvider()

export const reloadAllCitiesUseCase = new ReloadAllCitiesUseCase({
  citiesRepository,
  weatherProvider,
})

export const reloadAllCitiesController = new ReloadAllCitiesController({
  reloadAllCitiesUseCase,
})
