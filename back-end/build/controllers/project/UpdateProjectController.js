"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const UpdateProjectService_1 = require("../../services/project/UpdateProjectService");
class UpdateProjectController {
    async handle(req, res) {
        const { id_project, name, project_url } = req.body;
        const bannerFile = req.file;
        if (!id_project)
            throw new Error("ID is required!");
        if (!name)
            throw new Error("Name is required!");
        if (!project_url)
            throw new Error("Project URL is required!");
        const searchProject = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            }
        });
        if (!searchProject)
            return res.status(404).json({ error: "Project not found!" });
        const updateProjectService = new UpdateProjectService_1.UpdateProjectService();
        if (bannerFile) {
            const { filename: bannerName } = req.file;
            const project = await updateProjectService.execute({
                id_project,
                name,
                project_url,
                bannerName,
                bannerFile
            });
            return res.json(project);
        }
        else {
            const project = await updateProjectService.execute({
                id_project,
                name,
                project_url
            });
            return res.json(project);
        }
    }
}
exports.updateProjectController = new UpdateProjectController();
