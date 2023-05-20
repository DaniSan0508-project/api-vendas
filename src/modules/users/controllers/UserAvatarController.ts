import { Request, Response } from 'express';
import UpdateUserAvatarService from '../service/UpdateUserAvatarService';

class UserAvatarController {
  public async create(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file?.filename as string,
    });

    return response.json(user);
  }
}

export default UserAvatarController;
