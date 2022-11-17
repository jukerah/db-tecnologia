import { Request, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body;
    
    if (!username) throw new Error("Username is required!");
    if (!email) throw new Error("Email is required!");
    if (!password) throw new Error("Password is required!");

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      username,
      email,
      password
    });

    return res.json(user);
  }
}

export { CreateUserController }