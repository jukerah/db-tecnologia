/// <reference types="multer" />
interface ProjectRequest {
    name: string;
    project_url: string;
    bannerName: string;
    bannerFile: Express.Multer.File;
}
declare class CreateProjectService {
    execute({ name, project_url, bannerName, bannerFile }: ProjectRequest): Promise<import(".prisma/client").Project>;
}
export { CreateProjectService };
