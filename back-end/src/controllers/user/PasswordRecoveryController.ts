import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { PasswordRecoveryService } from "../../services/user/PasswordRecoveryService";

class PasswordRecoveryController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    
    if (!email) throw new Error("Email is required!");

    const searchUser = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });
    
    if (!searchUser) return res.status(404).json({error: "User not found!"});

    const passwordRecoveryService = new PasswordRecoveryService();

    const user = await passwordRecoveryService.execute({ email });

    return res.json(user);
  }
}

export { PasswordRecoveryController }