import { Request, Response } from "express";
import { RemoveProjectService } from "../../services/project/RemoveProjectService";

class RemoveProjectController {
  async handle(req: Request, res: Response) {
    const { id_project } = req.body;

    if (!id_project) throw new Error("ID is required!");

    const removeProjectService = new RemoveProjectService();

    const project = await removeProjectService.execute({ id_project });

    return res.json(project);
  }
}

export { RemoveProjectController }