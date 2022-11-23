import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { RemoveProjectService } from "../../services/project/RemoveProjectService";

class RemoveProjectController {
  async handle(req: Request, res: Response) {
    const { id_project } = req.body;

    if (!id_project) throw new Error("ID is required!");

    const searchProduct = await prismaClient.project.findUnique({
      where: {
        id: id_project
      }
    });
    
    if (!searchProduct) return res.status(404).json({error: "Product not found!"});

    const removeProjectService = new RemoveProjectService();

    const project = await removeProjectService.execute({ id_project });

    return res.json(project);
  }
}

export const removeProjectController = new RemoveProjectController();