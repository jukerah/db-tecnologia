import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

interface EmployeeRequest {
  id_employee: string;
}

class RemoveEmployeeService {
  async execute({ id_employee }: EmployeeRequest) {    
    const employee = await prismaClient.employee.delete({
      where: {
        id: id_employee
      }
    });

    const s3 = new S3Storage();
    await s3.deleteFile(employee.photo);

    return employee;
  }
}

export { RemoveEmployeeService }