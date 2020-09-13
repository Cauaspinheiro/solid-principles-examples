import City from '../../entities/City'

export default interface ICitiesRepository {
  findByName(name: string): Promise<City>
  save(city: City): Promise<void>
}
