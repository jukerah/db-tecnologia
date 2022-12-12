import prismaClient from "../../prisma";
import S3Storage from "../../utils/S3Storage";

interface EmployeeRequest {
  name: string;
  linkedin: string;
  photoName: string;
  photoFile: Express.Multer.File;
}

class CreateEmployeeService {
  async execute({ name, linkedin, photoName, photoFile }: EmployeeRequest) {
    const s3 = new S3Storage();
    await s3.saveFile(photoFile.filename);

    const employee = await prismaClient.employee.create({
      data: {
        name: name,
        linkedin: linkedin,
        photo: photoName
      }
    });

    return employee;
  }
}

export { CreateEmployeeService }