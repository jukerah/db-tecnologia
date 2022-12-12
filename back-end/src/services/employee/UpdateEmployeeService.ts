import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

interface EmployeeRequest {
  id_employee: string;
  name: string;
  linkedin: string;
  photoName?: string;
  photoFile?: Express.Multer.File;
}

class UpdateEmployeeService {
  async execute({ id_employee, name, linkedin, photoName, photoFile }: EmployeeRequest) {    
    const s3 = new S3Storage();
    await s3.saveFile(photoFile.filename);
  
    const employeeById = await prismaClient.employee.findUnique({
      where: {
        id: id_employee
      }
    });

    await s3.deleteFile(employeeById.photo);

    const employee = await prismaClient.employee.update({
      where: {
        id: id_employee
      },
      data: {
        name: name,
        linkedin: linkedin,
        photo: photoName
      }
    });

    return employee;
  }
}

export { UpdateEmployeeService }