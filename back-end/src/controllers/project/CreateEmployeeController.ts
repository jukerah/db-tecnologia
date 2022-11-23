import { Request, Response } from "express";
import { CreateProjectService } from "../../services/project/CreateProjectService";

class CreateProjectController {
  async handle(req: Request, res: Response) {
    const { name, project_url } = req.body;

    if (!name) throw new Error("Name is required!");
    if (!project_url) throw new Error("Project URL is required!");
    if (!req.file) throw new Error("Banner is required!");

    const createProjectService = new CreateProjectService();

    const { filename: banner } = req.file;

    const project = await createProjectService.execute({
      name,
      project_url,
      banner
    });

    return res.json(project);
  }
}

export const createProjectController = new CreateProjectController();