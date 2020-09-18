import romanNumerals from '../../constants/romanNumerals'

type RomanNumeral = keyof typeof romanNumerals

export default class RomanToDecimalUseCase {
  convert(numeral: string) {
    let decimalNum = 0

    for (let i = 0; i < numeral.length; i++) {
      const s1 = romanNumerals[numeral.charAt(i) as RomanNumeral]

      if (i + 1 < numeral.length) {
        const s2 = romanNumerals[numeral.charAt(i + 1) as RomanNumeral]

        if (s1 >= s2) {
          decimalNum += s1
        } else {
          decimalNum += s2 - s1
          i++
        }
      } else {
        decimalNum += s1
        i++
      }
    }

    return decimalNum
  }
}
