declare class ListProjectService {
    execute(): Promise<{
        id: string;
        name: string;
        project_url: string;
        banner: string;
    }[]>;
}
export { ListProjectService };
