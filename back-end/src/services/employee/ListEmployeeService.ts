import prismaClient from "../../prisma";

class ListEmployeeService{
  async execute() {
    const listEmployee = await prismaClient.employee.findMany({
      select: {
        id: true,
        name: true,
        linkedin: true,
        photo: true
      }
    });

    return listEmployee;
  }
}

export { ListEmployeeService }