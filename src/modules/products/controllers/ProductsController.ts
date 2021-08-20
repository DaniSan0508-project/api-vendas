import { Request } from 'express';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';

export default class ProductsController {
  public async index(request: Request, response: Response) {
    const listproduct = new ListProductService();

    const product = listproduct.execute();

    return response.json(product);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const showProduct = new ShowProductService();

    const product = showProduct.execute({ id });

    return response.json(product);
  }
}
