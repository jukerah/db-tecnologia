"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveEmployeeService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const S3Storage_1 = __importDefault(require("../../utils/S3Storage"));
class RemoveEmployeeService {
    async execute({ id_employee }) {
        const employee = await prisma_1.default.employee.delete({
            where: {
                id: id_employee
            }
        });
        const s3 = new S3Storage_1.default();
        await s3.deleteFile(employee.photo);
        return employee;
    }
}
exports.RemoveEmployeeService = RemoveEmployeeService;
