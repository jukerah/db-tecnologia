import prismaClient from "../../prisma";
import fs from 'fs';

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

    const filePath = `./tmp/${employee.photo}`;
    fs.unlinkSync(filePath);

    return employee;
  }
}

export { RemoveEmployeeService }