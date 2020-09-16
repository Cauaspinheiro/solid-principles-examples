import { Application } from 'express'

export default interface IApp {
  readonly server: Application
}
