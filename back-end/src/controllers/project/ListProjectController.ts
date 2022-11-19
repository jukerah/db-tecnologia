import { Request, Response } from "express";
import { ListProjectService } from "../../services/project/ListProjectService";

class ListProjectController {
  async handle(req: Request, res: Response) {
    const listProjectService = new ListProjectService();

    const listProject = await listProjectService.execute();

    return res.json(listProject);
  }
}

export { ListProjectController }