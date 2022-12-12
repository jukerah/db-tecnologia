"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const UpdateEmployeeService_1 = require("../../services/employee/UpdateEmployeeService");
class UpdateEmployeeController {
    async handle(req, res) {
        const { id_employee, name, linkedin } = req.body;
        const photoFile = req.file;
        if (!id_employee)
            throw new Error("ID is required!");
        if (!name)
            throw new Error("Name is required!");
        if (!linkedin)
            throw new Error("Linkedin is required!");
        const searchEmployee = await prisma_1.default.employee.findUnique({
            where: {
                id: id_employee
            }
        });
        if (!searchEmployee)
            return res.status(404).json({ error: "Employee not found!" });
        const updateEmployeeService = new UpdateEmployeeService_1.UpdateEmployeeService();
        if (photoFile) {
            const { filename: photoName } = req.file;
            const employee = await updateEmployeeService.execute({
                id_employee,
                name,
                linkedin,
                photoName,
                photoFile
            });
            return res.json(employee);
        }
        else {
            const employee = await updateEmployeeService.execute({
                id_employee,
                name,
                linkedin
            });
            return res.json(employee);
        }
    }
}
exports.updateEmployeeController = new UpdateEmployeeController();
