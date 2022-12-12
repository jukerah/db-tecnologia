"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const S3Storage_1 = __importDefault(require("../../utils/S3Storage"));
class UpdateProjectService {
    async execute({ id_project, name, project_url, bannerName, bannerFile }) {
        const s3 = new S3Storage_1.default();
        await s3.saveFile(bannerFile.filename);
        const projectById = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            }
        });
        await s3.deleteFile(projectById.banner);
        const project = await prisma_1.default.project.update({
            where: {
                id: id_project
            },
            data: {
                name: name,
                project_url: project_url,
                banner: bannerName
            }
        });
        return project;
    }
}
exports.UpdateProjectService = UpdateProjectService;
