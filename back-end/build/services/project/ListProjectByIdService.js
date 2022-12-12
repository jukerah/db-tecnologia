"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListProjectByIdService {
    async execute({ id_project }) {
        const project = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            },
            select: {
                name: true,
                project_url: true,
                banner: true
            }
        });
        return project;
    }
}
exports.ListProjectByIdService = ListProjectByIdService;
