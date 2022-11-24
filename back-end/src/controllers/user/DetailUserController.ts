import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const id_user = req.id_user;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(id_user);

    return res.json(user);
  }
}

export const detailUserController = new DetailUserController();