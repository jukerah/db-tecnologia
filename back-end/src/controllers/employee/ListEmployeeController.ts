import { Request, Response } from "express";
import { ListEmployeeService } from "../../services/employee/ListEmployeeService";

class ListEmployeeController {
  async handle(req: Request, res: Response) {
    const listEmployeeService = new ListEmployeeService();

    const listEmployee = await listEmployeeService.execute();

    return res.json(listEmployee);
  }
}

export { ListEmployeeController }