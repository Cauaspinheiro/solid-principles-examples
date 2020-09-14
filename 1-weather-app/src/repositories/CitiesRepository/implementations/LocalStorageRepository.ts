import City from '../../../entities/City'
import ICitiesRepository from '../ICitiesRepository'

export interface ILocalStorageRepositorySchema {
  name: string
}

export const REPOSITORY_KEY = 'citiesUsed'

export default class LocalStorageRepository implements ICitiesRepository {
  async findByName(cityName: string) {
    const storageValue = localStorage.getItem(REPOSITORY_KEY)

    if (!storageValue) return null

    const cities: ILocalStorageRepositorySchema[] = JSON.parse(storageValue)

    const city = cities.find((value) => {
      if (value.name.toLowerCase() === cityName.toLowerCase()) return true

      return false
    })

    console.log(city)

    if (!city) return null

    return city
  }

  async save(city: City) {
    const { name } = city

    const storageValue = localStorage.getItem(REPOSITORY_KEY)

    let cities: ILocalStorageRepositorySchema[]

    if (!storageValue) {
      cities = [{ name }]
    } else {
      cities = JSON.parse(storageValue)

      cities = [...cities, { name }]
    }

    localStorage.setItem(REPOSITORY_KEY, JSON.stringify(cities))
  }

  async getAllCities() {
    const storageValue = localStorage.getItem(REPOSITORY_KEY)

    if (!storageValue) return []

    const cities: ILocalStorageRepositorySchema[] = JSON.parse(storageValue)

    return cities
  }
}
