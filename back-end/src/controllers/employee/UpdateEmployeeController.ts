import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/employee/UpdateEmployeeService";

class UpdateEmployeeController {
  async handle(req: Request, res: Response) {
    const { id_employee, name, linkedin } = req.body;

    if (!id_employee) throw new Error("ID is required!");
    if (!name) throw new Error("Name is required!");
    if (!linkedin) throw new Error("Linkedin is required!");
    if (!req.file) throw new Error("Photo is required!");

    const updateEmployeeService = new UpdateEmployeeService();

    const { filename: photo } = req.file;

    const employee = await updateEmployeeService.execute({
      id_employee,
      name,
      linkedin,
      photo
    });

    return res.json(employee);
  }
}

export { UpdateEmployeeController }