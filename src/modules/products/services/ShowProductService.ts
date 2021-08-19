import { getCustomRepository, getRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepositorie';
import Product from '../typeorm/entities/Products';
import AppError from '@shared/errors/AppError';
interface IRequest {
  id: string;
}

class ListProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }
    return product;
  }
}
export default ListProductService;
