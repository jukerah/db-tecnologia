import prismaClient from "../../prisma";

interface ProjectRequest {
  id_project: string;
  name: string;
  project_url: string;
  banner?: string;
}

class UpdateProjectService {
  async execute({ id_project, name, project_url, banner }: ProjectRequest) {    
    const project = await prismaClient.project.update({
      where: {
        id: id_project
      },
      data: {
        name: name,
        project_url: project_url,
        banner: banner
      }
    });

    return project;
  }
}

export { UpdateProjectService }