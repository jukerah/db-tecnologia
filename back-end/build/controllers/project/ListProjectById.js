"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjectByIdController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const ListProjectByIdService_1 = require("../../services/project/ListProjectByIdService");
class ListProjectByIdController {
    async handle(req, res) {
        const id_project = req.params.id;
        if (!id_project)
            throw new Error("ID is required!");
        const searchProject = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            }
        });
        if (!searchProject)
            return res.status(404).json({ error: "Project not found!" });
        const listProjectById = new ListProjectByIdService_1.ListProjectByIdService();
        const project = await listProjectById.execute({ id_project });
        return res.json(project);
    }
}
exports.listProjectByIdController = new ListProjectByIdController();
