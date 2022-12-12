"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProjectController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const RemoveProjectService_1 = require("../../services/project/RemoveProjectService");
class RemoveProjectController {
    async handle(req, res) {
        const { id_project } = req.body;
        if (!id_project)
            throw new Error("ID is required!");
        const searchProduct = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            }
        });
        if (!searchProduct)
            return res.status(404).json({ error: "Product not found!" });
        const removeProjectService = new RemoveProjectService_1.RemoveProjectService();
        const project = await removeProjectService.execute({ id_project });
        return res.json(project);
    }
}
exports.removeProjectController = new RemoveProjectController();
