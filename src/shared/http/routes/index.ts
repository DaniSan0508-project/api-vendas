import productsRouter from '@modules/products/routes/products.routes';
import { Router, response } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello dev!' });
});

export default routes;
