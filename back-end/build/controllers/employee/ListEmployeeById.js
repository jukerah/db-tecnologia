"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEmployeeByIdController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const ListEmployeeByIdService_1 = require("../../services/employee/ListEmployeeByIdService");
class ListEmployeeByIdController {
    async handle(req, res) {
        const id_employee = req.params.id;
        if (!id_employee)
            throw new Error("ID is required!");
        const searchEmployee = await prisma_1.default.employee.findUnique({
            where: {
                id: id_employee
            }
        });
        if (!searchEmployee)
            return res.status(404).json({ error: "Employee not found!" });
        const listEmployeeById = new ListEmployeeByIdService_1.ListEmployeeByIdService();
        const employee = await listEmployeeById.execute({ id_employee });
        return res.json(employee);
    }
}
exports.listEmployeeByIdController = new ListEmployeeByIdController();
