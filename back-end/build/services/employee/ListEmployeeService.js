"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmployeeService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListEmployeeService {
    async execute() {
        const listEmployee = await prisma_1.default.employee.findMany({
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
exports.ListEmployeeService = ListEmployeeService;
