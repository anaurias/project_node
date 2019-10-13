import { Router } from 'express';
// import User from './app/model/User';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ana',
    email: 'anauriasmachado@gmail.com',
    password_hash: '123465465',
  });

  return res.json(user);
}); */

export default routes;
