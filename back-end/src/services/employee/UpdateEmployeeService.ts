import prismaClient from "../../prisma";

interface EmployeeRequest {
  id_user: string;
  name: string;
  linkedin: string;
  photo: string;
}

class UpdateEmployeeService {
  async execute({ id_user, name, linkedin, photo }: EmployeeRequest) {    
    const employee = await prismaClient.employee.update({
      where: {
        id: id_user
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