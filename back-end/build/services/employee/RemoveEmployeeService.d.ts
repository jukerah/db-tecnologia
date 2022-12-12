interface EmployeeRequest {
    id_employee: string;
}
declare class RemoveEmployeeService {
    execute({ id_employee }: EmployeeRequest): Promise<import(".prisma/client").Employee>;
}
export { RemoveEmployeeService };
