declare class ListEmployeeService {
    execute(): Promise<{
        id: string;
        name: string;
        linkedin: string;
        photo: string;
    }[]>;
}
export { ListEmployeeService };
