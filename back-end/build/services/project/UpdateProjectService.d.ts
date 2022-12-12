/// <reference types="multer" />
interface ProjectRequest {
    id_project: string;
    name: string;
    project_url: string;
    bannerName?: string;
    bannerFile?: Express.Multer.File;
}
declare class UpdateProjectService {
    execute({ id_project, name, project_url, bannerName, bannerFile }: ProjectRequest): Promise<import(".prisma/client").Project>;
}
export { UpdateProjectService };
