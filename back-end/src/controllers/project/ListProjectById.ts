import { Request, Response } from "express";
import prismaClient from "../../prisma";

import { ListProjectByIdService } from "../../services/project/ListProjectByIdService";

class ListProjectByIdController {
  async handle(req: Request, res: Response) {
    const id_project = req.params.id;

    if (!id_project) throw new Error("ID is required!");

    const searchProject = await prismaClient.project.findUnique({
      where: {
        id: id_project
      }
    });
    
    if (!searchProject) return res.status(404).json({error: "Project not found!"});

    const listProjectById = new ListProjectByIdService();

    const project = await listProjectById.execute({ id_project });

    return res.json(project);
  }
}

export const listProjectByIdController = new ListProjectByIdController();
