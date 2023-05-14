import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const emailExists = await userRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError('Email address already used.');
    }
    const user = userRepository.create({
      name,
      email,
      password,
    });

    await userRepository.save(user);
    return user;
  }
}

export default CreateUserService;
