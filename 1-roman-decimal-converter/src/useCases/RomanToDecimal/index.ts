import RomanToDecimalController from './RomanToDecimalController'
import RomanToDecimalUseCase from './RomanToDecimalUseCase'

export const romanToDecimalUseCase = new RomanToDecimalUseCase()

export const romanToDecimalController = new RomanToDecimalController({
  romanToDecimalUseCase,
})
