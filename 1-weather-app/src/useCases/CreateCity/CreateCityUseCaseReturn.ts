import City from '../../entities/City'

export default class CreateCityUseCaseReturn {
  public error?: string
  public city: City

  constructor(props: CreateCityUseCaseReturn) {
    this.city = props.city
    this.error = props.error
  }
}
