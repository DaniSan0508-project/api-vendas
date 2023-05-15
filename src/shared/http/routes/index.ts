import productsRouter from '@modules/products/routes/products.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router, response } from 'express';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello dev!' });
});

export default routes;
