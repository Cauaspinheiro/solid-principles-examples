import ICreateCityDTO from './CreateCityDTO'
import CreateCityUseCaseReturn from './CreateCityUseCaseReturn'

export default interface ICreateCityUseCase {
  createCity(data: ICreateCityDTO): Promise<CreateCityUseCaseReturn>
}
