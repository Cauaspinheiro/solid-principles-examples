import IApp from '../IApp'
import App, { AppMiddlewares } from '../App'
import routes from '../../routes'
import cors from 'cors'

export default class DevApp implements IApp {
  readonly server

  private middlewares: AppMiddlewares = (app) => {
    app.use(cors())
  }

  constructor() {
    this.server = new App({ middlewares: this.middlewares, routes }).server
  }
}
