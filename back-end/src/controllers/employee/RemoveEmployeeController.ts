import { Request, Response } from "express";
import { RemoveEmployeeService } from "../../services/employee/RemoveEmployeeService";

class RemoveEmployeeController {
  async handle(req: Request, res: Response) {
    const { id_employee } = req.body;

    if (!id_employee) throw new Error("ID is required!");

    const removeEmployeeService = new RemoveEmployeeService();

    const employee = await removeEmployeeService.execute({ id_employee });

    return res.json(employee);
  }
}

export { RemoveEmployeeController }