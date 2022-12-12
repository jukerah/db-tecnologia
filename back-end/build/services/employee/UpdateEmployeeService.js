"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const S3Storage_1 = __importDefault(require("../../utils/S3Storage"));
class UpdateEmployeeService {
    async execute({ id_employee, name, linkedin, photoName, photoFile }) {
        const s3 = new S3Storage_1.default();
        await s3.saveFile(photoFile.filename);
        const employeeById = await prisma_1.default.employee.findUnique({
            where: {
                id: id_employee
            }
        });
        await s3.deleteFile(employeeById.photo);
        const employee = await prisma_1.default.employee.update({
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
exports.UpdateEmployeeService = UpdateEmployeeService;
