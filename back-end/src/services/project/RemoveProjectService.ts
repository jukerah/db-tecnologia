import prismaClient from "../../prisma";
import fs from 'fs';

interface ProjectRequest {
  id_project: string;
}

class RemoveProjectService {
  async execute({ id_project }: ProjectRequest) {    
    const project = await prismaClient.project.delete({
      where: {
        id: id_project
      }
    });

    const filePath = `./tmp/${project.banner}`;
    fs.unlinkSync(filePath);

    return project;
  }
}

export { RemoveProjectService }