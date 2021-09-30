import {Router} from 'express';
import { UsersControllers } from '../controllers/UsersControllers';

const routes = Router();

const usersControllers = new UsersControllers();

routes.get('/', usersControllers.index);
routes.post('/', usersControllers.create);
routes.put('/', usersControllers.update);
routes.get('/:name', usersControllers.show);
routes.delete('/:name', usersControllers.delete)

export default routes