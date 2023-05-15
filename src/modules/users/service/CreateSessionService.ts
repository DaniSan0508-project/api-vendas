import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }
    const passwordConfimed = await compare(password, user.password);

    if (!passwordConfimed) {
      throw new AppError('Incorrect email/password combination.');
    }
    const token = sign({}, 'e3e49b9d5628e98b96e3c31e6d397f40', {
      subject: user.id,
      expiresIn: '1d',
    });
    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;
