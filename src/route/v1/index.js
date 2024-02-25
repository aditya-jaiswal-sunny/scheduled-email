import express from 'express';
import scheduleRoute from './schedule.route.js';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/schedule',
    route: scheduleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
