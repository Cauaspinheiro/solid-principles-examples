import { NextFunction, Request, Response } from 'express'
import romanNumerals from '../constants/romanNumerals'
import IRomanToDecimalRequest from '../useCases/RomanToDecimal/IRomanToDecimalRequest'

export default async function validateRomanNumeral(
  req: Request<IRomanToDecimalRequest['params']>,
  res: Response,
  next: NextFunction
) {
  req.params.romanNumeral = req.params.romanNumeral.toUpperCase()

  const { romanNumeral } = req.params

  let isValid = true

  for (let i = 0; i < romanNumeral.length; i++) {
    if (!(romanNumeral[i] in romanNumerals)) {
      isValid = false
      break
    }
  }

  if (isValid) return next()

  return res.status(400).json({ error: 'ROMAN NUMERAL NOT VALID' })
}
