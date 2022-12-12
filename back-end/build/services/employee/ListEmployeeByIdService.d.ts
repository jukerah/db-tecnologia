interface EmployeeRequest {
    id_employee: string;
}
declare class ListEmployeeByIdService {
    execute({ id_employee }: EmployeeRequest): Promise<{
        name: string;
        linkedin: string;
        photo: string;
    }>;
}
export { ListEmployeeByIdService };
