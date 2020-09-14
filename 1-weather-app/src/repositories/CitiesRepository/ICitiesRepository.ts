import City from '../../entities/City'

export default interface ICitiesRepository {
  findByName(name: string): Promise<unknown>
  save(city: City): Promise<void>
}
