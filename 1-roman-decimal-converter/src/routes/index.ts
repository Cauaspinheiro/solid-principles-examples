import { Router } from 'express'
import validateRomanNumeral from '../middlewares/ValidateRomanNumeral'
import { romanToDecimalController } from '../useCases/RomanToDecimal'

const routes = Router()

routes.get(
  '/roman/to/decimal/:romanNumeral',
  validateRomanNumeral,
  (req, res) => {
    romanToDecimalController.handleConvert(req, res)
  }
)

export default routes
