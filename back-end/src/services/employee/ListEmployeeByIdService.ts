import prismaClient from "../../prisma";

interface EmployeeRequest {
  id_employee: string;
}

class ListEmployeeByIdService {
  async execute({ id_employee }: EmployeeRequest) { 
  
    const employee = await prismaClient.employee.findUnique({
      where: {
        id: id_employee
      },
      select: {
        name: true,
        linkedin: true,
        photo: true
      }
    });

    return employee;
  }
}

export { ListEmployeeByIdService }