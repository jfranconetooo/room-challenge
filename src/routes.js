import userRouter from './users/router.js';
import appRouter from './app/router.js';
import roomRouter from './room/router.js';

export default (route) => {
    route.use(appRouter.routes(), appRouter.allowedMethods());
    route.use(userRouter.routes(), userRouter.allowedMethods());
    route.use(roomRouter.routes(), roomRouter.allowedMethods());
};
  