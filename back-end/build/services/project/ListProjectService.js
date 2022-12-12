"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListProjectService {
    async execute() {
        const listProject = await prisma_1.default.project.findMany({
            select: {
                id: true,
                name: true,
                project_url: true,
                banner: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return listProject;
    }
}
exports.ListProjectService = ListProjectService;
