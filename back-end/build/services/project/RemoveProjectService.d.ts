interface ProjectRequest {
    id_project: string;
}
declare class RemoveProjectService {
    execute({ id_project }: ProjectRequest): Promise<import(".prisma/client").Project>;
}
export { RemoveProjectService };
