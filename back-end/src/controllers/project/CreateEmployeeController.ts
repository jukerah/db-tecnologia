import { Request, Response } from "express";
import { CreateProjectService } from "../../services/project/CreateProjectService";

class CreateProjectController {
  async handle(req: Request, res: Response) {
    const { name, project_url } = req.body;
    const bannerFile = req.file;

    if (!name) throw new Error("Name is required!");
    if (!project_url) throw new Error("Project URL is required!");
    if (!bannerFile) throw new Error("Banner is required!");

    const createProjectService = new CreateProjectService();

    const { filename: bannerName } = req.file;

    const project = await createProjectService.execute({
      name,
      project_url,
      bannerName,
      bannerFile
    });

    return res.json(project);
  }
}

export const createProjectController = new CreateProjectController();