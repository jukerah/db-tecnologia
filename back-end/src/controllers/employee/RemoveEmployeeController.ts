import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { RemoveEmployeeService } from "../../services/employee/RemoveEmployeeService";

class RemoveEmployeeController {
  async handle(req: Request, res: Response) {
    const { id_employee } = req.body;

    if (!id_employee) throw new Error("ID is required!");

    const searchEmployee = await prismaClient.employee.findUnique({
      where: {
        id: id_employee
      }
    });
    
    if (!searchEmployee) return res.status(404).json({error: "Employee not found!"});

    const removeEmployeeService = new RemoveEmployeeService();

    const employee = await removeEmployeeService.execute({ id_employee });

    return res.json(employee);
  }
}

export const removeEmployeeController = new RemoveEmployeeController();
