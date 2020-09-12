export default class City {
  public name: string
  public country: string
  public date: Date

  public temperature: number
  public minTemperature: number
  public maxTemperature: number

  public climateIcon: string
  public climateDescription: string

  public humidity: number

  constructor(obj: City) {
    this.name = obj.name
    this.country = obj.country
    this.date = obj.date

    this.temperature = obj.temperature
    this.minTemperature = obj.minTemperature
    this.maxTemperature = obj.maxTemperature

    this.climateIcon = obj.climateIcon
    this.climateDescription = obj.climateDescription
    this.humidity = obj.humidity
  }
}
