export default class City {
  public name: string
  public country: string
  readonly date = new Date()

  public temperature: number
  public minTemperature: number
  public maxTemperature: number

  public climateIcon: string
  public climateDescription: string

  public humidity: number

  constructor(constructorObj: Omit<City, 'date'>) {
    this.name = constructorObj.name
    this.country = constructorObj.country

    this.temperature = constructorObj.temperature
    this.minTemperature = constructorObj.minTemperature
    this.maxTemperature = constructorObj.maxTemperature

    this.climateIcon = constructorObj.climateIcon
    this.climateDescription = constructorObj.climateDescription
    this.humidity = constructorObj.humidity
  }
}
