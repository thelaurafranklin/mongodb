/* Module dependencies */
import app from './app.js';
import debugLib from 'debug';
const debug = debugLib('mongodb:server');
import http from 'http';

/* Get and set port number */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/* Create HTTP server */
const server = http.createServer(app);

/* Listen on port for changes/errors */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/* Normalize port into number, string, or false */
function normalizePort(val) {
  const port = parseInt(val, 10);

  // named pipe
  if (isNaN(port)) {
    return val;
  }

  // port number
  if (port >= 0) {
    return port;
  }

  return false;
}

/* Error handling */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // Handle listen errors
  if (error.code === 'EADDRINUSE') {
    console.error(bind + ' is already in use');
    process.exit(1);
  } else {
    throw error;
  }
}

/* Event handler for server listening  */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
