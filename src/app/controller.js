import { findUserByUserName } from '../users/service.js';
import { sign } from '../utils/index.js';
import Bcrypt from "bcryptjs";
import { isAuthenticated } from '../middlewares/authenticate.js';

export const info = (ctx) => {
    return ctx.body = 'Server is running!';
}

export const sign_in = async (ctx) => {
    const { username, password } = ctx.request.body;
    try {
        const user = (await findUserByUserName(username, true)).toObject();
        if(Bcrypt.compareSync(password, user.password)) {
            delete user.password;
            return ctx.body = {
                access_token: await sign(user)
            }
        }
    
        throw new Error('ERROR:INVALID_PASSWORD');
    } catch (error) {
        throw new Error("ERROR:INVALID_USERNAME");
    } 
}


export const authenticate = async (ctx) => {
    await isAuthenticated(ctx);
    return ctx.body = ctx.user;
}