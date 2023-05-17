import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing.');
  }
  const [_, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt);
    return next();
  } catch {
    throw new AppError('Inválid JWT token');
  }
}
