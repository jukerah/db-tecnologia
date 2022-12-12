interface ProjectRequest {
    id_project: string;
}
declare class ListProjectByIdService {
    execute({ id_project }: ProjectRequest): Promise<{
        name: string;
        project_url: string;
        banner: string;
    }>;
}
export { ListProjectByIdService };
