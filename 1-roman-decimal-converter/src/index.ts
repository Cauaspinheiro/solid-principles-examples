import DevApp from './app/implementations/DevApp'

const server = new DevApp().server

server.listen(3001)
