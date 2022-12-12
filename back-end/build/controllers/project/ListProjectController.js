"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjectController = void 0;
const ListProjectService_1 = require("../../services/project/ListProjectService");
class ListProjectController {
    async handle(req, res) {
        const listProjectService = new ListProjectService_1.ListProjectService();
        const listProject = await listProjectService.execute();
        return res.json(listProject);
    }
}
exports.listProjectController = new ListProjectController();
