"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const S3Storage_1 = __importDefault(require("../../utils/S3Storage"));
class RemoveProjectService {
    async execute({ id_project }) {
        const project = await prisma_1.default.project.delete({
            where: {
                id: id_project
            }
        });
        const s3 = new S3Storage_1.default();
        await s3.deleteFile(project.banner);
        return project;
    }
}
exports.RemoveProjectService = RemoveProjectService;
