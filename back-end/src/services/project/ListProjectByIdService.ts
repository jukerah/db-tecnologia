import prismaClient from "../../prisma";

interface ProjectRequest {
  id_project: string;
}

class ListProjectByIdService {
  async execute({ id_project }: ProjectRequest) {    
    const project = await prismaClient.project.findUnique({
      where: {
        id: id_project
      },
      select: {
        name: true,
        project_url: true,
        banner: true
      }
    });

    return project;
  }
}

export { ListProjectByIdService }