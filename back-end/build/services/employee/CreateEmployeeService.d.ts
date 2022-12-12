/// <reference types="multer" />
interface EmployeeRequest {
    name: string;
    linkedin: string;
    photoName: string;
    photoFile: Express.Multer.File;
}
declare class CreateEmployeeService {
    execute({ name, linkedin, photoName, photoFile }: EmployeeRequest): Promise<import(".prisma/client").Employee>;
}
export { CreateEmployeeService };
