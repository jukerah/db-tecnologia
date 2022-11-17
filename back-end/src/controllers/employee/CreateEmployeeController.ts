import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/employee/CreateEmployeeService";

class CreateEmployeeController {
  async handle(req: Request, res: Response) {
    const { name, linkedin } = req.body;

    if (!name) throw new Error("Name is required!");
    if (!linkedin) throw new Error("Linkedin is required!");
    if (!req.file) throw new Error("Photo is required!");

    const createUserService = new CreateEmployeeService();

    const { originalname, filename: photo } = req.file;

    const user = await createUserService.execute({
      name,
      linkedin,
      photo
    });

    return res.json(user);
  }
}

export { CreateEmployeeController }