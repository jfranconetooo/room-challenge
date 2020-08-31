import { decodeToken } from '../utils/index.js';

export default async (ctx, next) => {
    await isAuthenticated(ctx);
    await next();
}

export const isAuthenticated = async (ctx) => {

  const authorization = ctx.request.header['authorization'];

  if (authorization === undefined || !authorization.startsWith('Bearer')) {
    throw new Error('ERROR:INVALID_AUTHORIZATION');
  }

  ctx.user = decodeToken(authorization.split(' ').pop());

}
