import { Request, Response } from "express";
import prismaClient from "../../prisma";

import { ListEmployeeByIdService } from "../../services/employee/ListEmployeeByIdService";

class ListEmployeeByIdController {
  async handle(req: Request, res: Response) {
    const id_employee = req.params.id;

    if (!id_employee) throw new Error("ID is required!");

    const searchEmployee = await prismaClient.employee.findUnique({
      where: {
        id: id_employee
      }
    });
    
    if (!searchEmployee) return res.status(404).json({error: "Employee not found!"});

    const listEmployeeById = new ListEmployeeByIdService();

    const employee = await listEmployeeById.execute({ id_employee });

    return res.json(employee);
  }
}

export const listEmployeeByIdController = new ListEmployeeByIdController();
