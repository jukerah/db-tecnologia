import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id_user, username, email, password } = req.body;
    
    if (!id_user) throw new Error("ID is required!");
    if (!username && !email && !password) {
      throw new Error("Username, email and password is required!");
    }

    const searchUser = await prismaClient.user.findUnique({
      where: {
        id: id_user
      }
    });
    
    if (!searchUser) return res.status(404).json({error: "User not found!"});

    const createUserService = new UpdateUserService();

    const user = await createUserService.execute({
      id_user,
      username,
      email,
      password
    });

    return res.json(user);
  }
}

export { UpdateUserController }