import server from './server.js';
import log4js from 'log4js';

log4js.configure({
  appenders: { 'out': { type: 'stdout' } },
  categories: { default: { appenders: ['out'], level: 'info' } }
});
const log = log4js.getLogger('app')

const PORT = process.env.PORT || 3000

server().then(app => {
    app.listen(PORT, () => {
        log.info(`Server listening on ${ PORT }`);
    })
}, err => {
    log.error('Error while starting up server', err);
    process.exit(1);
});