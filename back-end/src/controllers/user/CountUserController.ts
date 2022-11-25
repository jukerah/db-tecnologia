import { Request, Response } from "express";
import { CountUserService } from "../../services/user/CountUserService";

class CountUserController {
  async handle(req: Request, res: Response) {
    const countUserService = new CountUserService();

    const countUser = await countUserService.execute();

    return res.json({_count: countUser});
  }
}

export const countUserController = new CountUserController();