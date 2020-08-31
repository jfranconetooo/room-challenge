import Koa from 'koa';
import koaRouter from 'koa-router';
import cors from '@koa/cors';
import logRequests from './middlewares/log-request.js';
import routes from './routes.js';
import log4js from 'log4js';
import koaBody from 'koa-body';
import error from './middlewares/error.js';
import './config/database.js';

const log = log4js.getLogger('server');

export default async () => {
    log.info('Creating server...');

    const app = await init();
    return app;
}

const init = async () => {
    const app = new Koa();
    const router = koaRouter({prefix: '/api'});
    app.use(logRequests);
    app.use(cors());
    app.use(error)
    app.use(koaBody());
    routes(router);
    app.use(router.routes());

    return app
}