"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const S3Storage_1 = __importDefault(require("../../utils/S3Storage"));
class CreateProjectService {
    async execute({ name, project_url, bannerName, bannerFile }) {
        const s3 = new S3Storage_1.default();
        await s3.saveFile(bannerFile.filename);
        const project = await prisma_1.default.project.create({
            data: {
                name: name,
                project_url: project_url,
                banner: bannerName
            }
        });
        return project;
    }
}
exports.CreateProjectService = CreateProjectService;
