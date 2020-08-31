import KoaRouter from 'koa-router';
import { info, authenticate, sign_in } from './controller.js';

const router = new KoaRouter();

router.get('/', info);
router.get('/authenticate', authenticate);
router.post('/sign_in', sign_in);

export default router;
