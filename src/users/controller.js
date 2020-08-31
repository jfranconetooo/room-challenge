import { listUsers, createUser, updateUserById, removeUser } from './service.js';
import { sign } from '../utils/index.js';
import log4js from 'log4js';
const log = log4js.getLogger('user-ctrl');

export const list = async (ctx) => {
    const { username } = ctx.request.query;
    return ctx.body = await listUsers(username);
}

export const create = async (ctx) => {
    const { body } = ctx.request;
    const user = (await createUser(body)).toObject();
    delete user.password;
    return ctx.body = {
        access_token: await sign(user)
    }
}

export const update = async (ctx) => {
    const { body } = ctx.request;
    return ctx.body = await updateUserById(ctx.user._id, body);
}

export const remove = async (ctx) => {
    await removeUser(ctx.user._id);
    ctx.status = 204;
}

