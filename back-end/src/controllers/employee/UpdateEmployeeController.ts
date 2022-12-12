import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { UpdateEmployeeService } from "../../services/employee/UpdateEmployeeService";

class UpdateEmployeeController {
  async handle(req: Request, res: Response) {
    const { id_employee, name, linkedin } = req.body;
    const photoFile = req.file;

    if (!id_employee) throw new Error("ID is required!");
    if (!name) throw new Error("Name is required!");
    if (!linkedin) throw new Error("Linkedin is required!");

    const searchEmployee = await prismaClient.employee.findUnique({
      where: {
        id: id_employee
      }
    });

    if (!searchEmployee) return res.status(404).json({error: "Employee not found!"});

    const updateEmployeeService = new UpdateEmployeeService();

    if (photoFile) {
      const { filename: photoName } = req.file;

      const employee = await updateEmployeeService.execute({
        id_employee,
        name,
        linkedin,
        photoName,
        photoFile
      });

      return res.json(employee);
    } else {
      const employee = await updateEmployeeService.execute({
        id_employee,
        name,
        linkedin
      });

      return res.json(employee);
    }
  }
}

export const updateEmployeeController = new UpdateEmployeeController();