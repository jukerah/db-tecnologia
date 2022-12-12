import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

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

    const s3 = new S3Storage();
    await s3.deleteFile(project.banner);

    return project;
  }
}

export { RemoveProjectService }