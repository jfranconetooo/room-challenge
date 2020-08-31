import KoaRouter from 'koa-router';
import { list, create, update, remove } from './controller.js';
import authenticate from '../middlewares/authenticate.js';
const router = new KoaRouter({prefix: '/users'});

router.get('/', list);
router.post('/', create);
router.patch('/', authenticate, update);
router.delete('/', authenticate, remove);

export default router;
