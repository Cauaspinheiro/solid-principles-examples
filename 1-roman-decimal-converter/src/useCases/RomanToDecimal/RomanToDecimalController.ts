import { Request, Response } from 'express'
import IRomanToDecimalRequest from './IRomanToDecimalRequest'
import RomanToDecimalUseCase from './RomanToDecimalUseCase'

export interface IRomanToDecimalControllerProps {
  romanToDecimalUseCase: RomanToDecimalUseCase
}

export default class RomanToDecimalController {
  private romanToDecimalUseCase

  constructor(props: IRomanToDecimalControllerProps) {
    this.romanToDecimalUseCase = props.romanToDecimalUseCase
  }

  handleConvert(req: Request<IRomanToDecimalRequest['params']>, res: Response) {
    try {
      const decimalNumber = this.romanToDecimalUseCase.convert(
        req.params.romanNumeral
      )

      return res
        .status(200)
        .json({ romanNumeral: req.params.romanNumeral, decimalNumber })
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'SOMETHING WENT WRONG', details: error.toString() })
    }
  }
}
