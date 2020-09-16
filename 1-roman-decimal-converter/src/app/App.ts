import express, { Router, Application } from 'express'

export type AppMiddlewares = (app: Application) => void

export interface IAppProps {
  middlewares?: AppMiddlewares
  routes: Router
}

export default class App {
  private middlewaresDeps
  private routesDeps

  readonly server = express()

  constructor(props: IAppProps) {
    this.middlewaresDeps = props.middlewares
    this.routesDeps = props.routes

    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.server.use(express.json())

    this.middlewaresDeps?.(this.server)
  }

  private routes() {
    this.server.use(this.routesDeps)
  }
}
