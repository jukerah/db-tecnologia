import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

interface ProjectRequest {
  name: string;
  project_url: string;
  bannerName: string;
  bannerFile: Express.Multer.File;
}

class CreateProjectService {
  async execute({ name, project_url, bannerName, bannerFile }: ProjectRequest) {   
    const s3 = new S3Storage();
    await s3.saveFile(bannerFile.filename);

    const project = await prismaClient.project.create({
      data: {
        name: name,
        project_url: project_url,
        banner: bannerName
      }
    });

    return project;
  }
}

export { CreateProjectService }