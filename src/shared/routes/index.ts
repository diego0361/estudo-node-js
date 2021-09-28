import {Router} from 'express';
import UserRoutes from '@modules/Users/routes/users.router'

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/products', () => console.log());
routes.use('/orders', () => console.log());

export default routes;