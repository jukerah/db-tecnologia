import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { UpdateProjectService } from "../../services/project/UpdateProjectService";

class UpdateProjectController {
  async handle(req: Request, res: Response) {
    const { id_project, name, project_url } = req.body;

    if (!id_project) throw new Error("ID is required!");
    if (!name) throw new Error("Name is required!");
    if (!project_url) throw new Error("Project URL is required!");

    const searchProject = await prismaClient.project.findUnique({
      where: {
        id: id_project
      }
    });
    
    if (!searchProject) return res.status(404).json({error: "Project not found!"});
    
    const updateProjectService = new UpdateProjectService();

    if (req.file) {
      const { filename: banner } = req.file;

      const project = await updateProjectService.execute({
        id_project,
        name,
        project_url,
        banner
      });

      return res.json(project);
    } else {
      const project = await updateProjectService.execute({
        id_project,
        name,
        project_url
      });

      return res.json(project);
    }
  }
}

export const updateProjectController = new UpdateProjectController();
