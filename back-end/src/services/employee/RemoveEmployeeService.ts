import prismaClient from "../../prisma";

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

    return employee;
  }
}

export { RemoveEmployeeService }