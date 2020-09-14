import City from '../../entities/City'
import CreateCityUseCase from './CreateCityUseCase'

export interface ICreateCityControllerProps {
  createCityUseCase: CreateCityUseCase
}

export interface IHandleCreateCityProps {
  name: string
  opts?: {
    units: WeatherUnits
  }
}

export interface IHandleCreateCityReturn {
  error?: string
  city?: City
}

export default class CreateCityController {
  private createCityUseCase: CreateCityUseCase

  constructor(props: ICreateCityControllerProps) {
    this.createCityUseCase = props.createCityUseCase
  }

  async handleCreateCity({
    name,
    opts = { units: 'metric' },
  }: IHandleCreateCityProps): Promise<IHandleCreateCityReturn> {
    try {
      const city = await this.createCityUseCase.createCity({
        name: name,
        unit: opts.units,
      })

      return {
        city,
        error: undefined,
      }
    } catch (error) {
      return { error, city: undefined }
    }
  }
}
