import CreateCityUseCase from './CreateCityUseCase'

export interface ICreateCityControllerProps {
  createCityUseCase: CreateCityUseCase
}

export interface IHandleCreateCityProps {
  name: string
  opts: {
    units: WeatherUnits
  }
}

export default class CreateCityController {
  private createCityUseCase: CreateCityUseCase

  constructor(props: ICreateCityControllerProps) {
    this.createCityUseCase = props.createCityUseCase
  }

  async handleCreateCity(props: IHandleCreateCityProps) {
    const { city, error } = await this.createCityUseCase.createCity({
      name: props.name,
      unit: props.opts.units || 'metric',
    })

    return {
      city,
      error,
    }
  }
}
