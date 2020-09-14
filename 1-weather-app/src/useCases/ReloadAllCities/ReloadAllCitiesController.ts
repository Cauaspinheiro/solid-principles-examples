import City from '../../entities/City'
import ReloadAllCitiesUseCase from './ReloadAllCitiesUseCase'

export interface IReloadAllCitiesControllerProps {
  reloadAllCitiesUseCase: ReloadAllCitiesUseCase
}

export interface IHandleReloadAllCitiesReturn {
  cities?: City[]
  error?: string[]
}

export default class ReloadAllCitiesController {
  private reloadAllCitiesUseCase: ReloadAllCitiesUseCase

  constructor(props: IReloadAllCitiesControllerProps) {
    this.reloadAllCitiesUseCase = props.reloadAllCitiesUseCase
  }

  async handleReloadAllCities(): Promise<IHandleReloadAllCitiesReturn> {
    try {
      const cities = await this.reloadAllCitiesUseCase.reloadAllCities()

      return {
        cities,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }
}
