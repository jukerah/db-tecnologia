import prismaClient from "../../prisma";

interface ProjectRequest {
  name: string;
  project_url: string;
  banner: string;
}

class CreateProjectService {
  async execute({ name, project_url, banner }: ProjectRequest) {    
    const project = await prismaClient.project.create({
      data: {
        name: name,
        project_url: project_url,
        banner: banner
      }
    });

    return project;
  }
}

export { CreateProjectService }