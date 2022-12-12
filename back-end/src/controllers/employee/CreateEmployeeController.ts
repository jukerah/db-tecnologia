import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/employee/CreateEmployeeService";

class CreateEmployeeController {
  async handle(req: Request, res: Response) {
    const { name, linkedin } = req.body;
    const photoFile = req.file;

    if (!name) throw new Error("Name is required!");
    if (!linkedin) throw new Error("Linkedin is required!");
    if (!photoFile) throw new Error("Photo is required!");

    const createEmployeeService = new CreateEmployeeService();

    const { filename: photoName } = req.file;

    const employee = await createEmployeeService.execute({
      name,
      linkedin,
      photoName,
      photoFile
    });

    return res.json(employee);
  }
}

export const createEmployeeController = new CreateEmployeeController();