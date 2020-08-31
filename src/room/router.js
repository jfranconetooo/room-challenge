import KoaRouter from 'koa-router';
import { list, getInfo, join, leave, changeHost, create } from './controller.js';
import authenticate from '../middlewares/authenticate.js';

const router = new KoaRouter({prefix: '/rooms'});

router.get('/', list);
router.get('/:guid', getInfo);
router.post('/', authenticate, create);
router.post('/:id/join', authenticate, join);
router.post('/:id/leave', authenticate, leave);
router.post('/:id/change-host', authenticate, changeHost);

export default router;
