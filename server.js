const httpServer = require('http-server');
const server = httpServer.create();
const middlewares = httpServer.defaults({
  static: 'dist',
  noCors: true,
});

server.use(middlewares);
