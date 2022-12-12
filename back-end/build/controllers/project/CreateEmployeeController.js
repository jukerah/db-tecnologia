"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectController = void 0;
const CreateProjectService_1 = require("../../services/project/CreateProjectService");
class CreateProjectController {
    async handle(req, res) {
        const { name, project_url } = req.body;
        const bannerFile = req.file;
        if (!name)
            throw new Error("Name is required!");
        if (!project_url)
            throw new Error("Project URL is required!");
        if (!bannerFile)
            throw new Error("Banner is required!");
        const createProjectService = new CreateProjectService_1.CreateProjectService();
        const { filename: bannerName } = req.file;
        const project = await createProjectService.execute({
            name,
            project_url,
            bannerName,
            bannerFile
        });
        return res.json(project);
    }
}
exports.createProjectController = new CreateProjectController();
