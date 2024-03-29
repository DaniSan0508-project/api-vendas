import { Request, Response } from 'express';
import CreateSessionService from '../service/CreateSessionService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const createSessionService = new CreateSessionService();
    const user = await createSessionService.execute({
      email,
      password,
    });
    return response.json(user);
  }
}

export default SessionsController;
