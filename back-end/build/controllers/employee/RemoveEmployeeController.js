"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmployeeController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const RemoveEmployeeService_1 = require("../../services/employee/RemoveEmployeeService");
class RemoveEmployeeController {
    async handle(req, res) {
        const { id_employee } = req.body;
        if (!id_employee)
            throw new Error("ID is required!");
        const searchEmployee = await prisma_1.default.employee.findUnique({
            where: {
                id: id_employee
            }
        });
        if (!searchEmployee)
            return res.status(404).json({ error: "Employee not found!" });
        const removeEmployeeService = new RemoveEmployeeService_1.RemoveEmployeeService();
        const employee = await removeEmployeeService.execute({ id_employee });
        return res.json(employee);
    }
}
exports.removeEmployeeController = new RemoveEmployeeController();
