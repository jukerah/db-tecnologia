import prismaClient from "../../prisma";

interface EmployeeRequest {
  id_employee: string;
  name: string;
  linkedin: string;
  photo: string;
}

class UpdateEmployeeService {
  async execute({ id_employee, name, linkedin, photo }: EmployeeRequest) {    
    const employee = await prismaClient.employee.update({
      where: {
        id: id_employee
      },
      data: {
        name: name,
        linkedin: linkedin,
        photo: photo
      }
    });

    return employee;
  }
}

export { UpdateEmployeeService }