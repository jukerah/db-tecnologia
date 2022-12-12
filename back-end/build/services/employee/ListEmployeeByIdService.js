"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmployeeByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListEmployeeByIdService {
    async execute({ id_employee }) {
        const employee = await prisma_1.default.employee.findUnique({
            where: {
                id: id_employee
            },
            select: {
                name: true,
                linkedin: true,
                photo: true
            }
        });
        return employee;
    }
}
exports.ListEmployeeByIdService = ListEmployeeByIdService;
