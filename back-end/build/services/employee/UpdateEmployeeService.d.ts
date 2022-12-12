/// <reference types="multer" />
interface EmployeeRequest {
    id_employee: string;
    name: string;
    linkedin: string;
    photoName?: string;
    photoFile?: Express.Multer.File;
}
declare class UpdateEmployeeService {
    execute({ id_employee, name, linkedin, photoName, photoFile }: EmployeeRequest): Promise<import(".prisma/client").Employee>;
}
export { UpdateEmployeeService };
