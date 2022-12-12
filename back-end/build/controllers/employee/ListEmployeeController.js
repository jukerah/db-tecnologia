"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEmployeeController = void 0;
const ListEmployeeService_1 = require("../../services/employee/ListEmployeeService");
class ListEmployeeController {
    async handle(req, res) {
        const listEmployeeService = new ListEmployeeService_1.ListEmployeeService();
        const listEmployee = await listEmployeeService.execute();
        return res.json(listEmployee);
    }
}
exports.listEmployeeController = new ListEmployeeController();
