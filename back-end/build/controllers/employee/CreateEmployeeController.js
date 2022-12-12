"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployeeController = void 0;
const CreateEmployeeService_1 = require("../../services/employee/CreateEmployeeService");
class CreateEmployeeController {
    async handle(req, res) {
        const { name, linkedin } = req.body;
        const photoFile = req.file;
        if (!name)
            throw new Error("Name is required!");
        if (!linkedin)
            throw new Error("Linkedin is required!");
        if (!photoFile)
            throw new Error("Photo is required!");
        const createEmployeeService = new CreateEmployeeService_1.CreateEmployeeService();
        const { filename: photoName } = req.file;
        const employee = await createEmployeeService.execute({
            name,
            linkedin,
            photoName,
            photoFile
        });
        return res.json(employee);
    }
}
exports.createEmployeeController = new CreateEmployeeController();
