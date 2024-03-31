import { Router } from 'express';
import cotlRoutes from './routes';

const router = new Router();

const defaultRoutes = [
    { path: '/', route: cotlRoutes },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;