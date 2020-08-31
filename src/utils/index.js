import jwt from 'jsonwebtoken';
import log4js from 'log4js';
const log = log4js.getLogger('utils');

export const sign = async (payload, secret = process.env.JWT_SECRET || "xxx", appendBearer = true) => {
    try {
      const token = jwt.sign(payload, secret);
      const bearer = appendBearer ? `Bearer ${token}` : token;
      return bearer;
    } catch (error) {
        log.error('createJWT error:', error);
      throw error;
    }
  }
  
export const decodeToken = (token, secret = process.env.JWT_SECRET || "xxx") => {
    try {
        const decode = jwt.verify(token, secret);
        return decode;
      } catch (error) {
        throw new Error(error.message);
      }
}