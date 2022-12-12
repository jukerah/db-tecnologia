import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

interface ProjectRequest {
  id_project: string;
  name: string;
  project_url: string;
  bannerName?: string;
  bannerFile?: Express.Multer.File;
}

class UpdateProjectService {
  async execute({ id_project, name, project_url, bannerName, bannerFile }: ProjectRequest) {
    const s3 = new S3Storage();
    await s3.saveFile(bannerFile.filename);
  
    const projectById = await prismaClient.project.findUnique({
      where: {
        id: id_project
      }
    });

    await s3.deleteFile(projectById.banner);

    const project = await prismaClient.project.update({
      where: {
        id: id_project
      },
      data: {
        name: name,
        project_url: project_url,
        banner: bannerName
      }
    });

    return project;
  }
}

export { UpdateProjectService }