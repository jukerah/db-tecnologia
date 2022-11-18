import prismaClient from "../../prisma";

interface EmployeeRequest {
  name: string;
  linkedin: string;
  photo: string;
}

class CreateEmployeeService {
  async execute({ name, linkedin, photo }: EmployeeRequest) {    
    const employee = await prismaClient.employee.create({
      data: {
        name: name,
        linkedin: linkedin,
        photo: photo
      }
    });

    return employee;
  }
}

export { CreateEmployeeService }