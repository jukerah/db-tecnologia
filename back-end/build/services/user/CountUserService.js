"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CountUserService {
    async execute() {
        const countUser = await prisma_1.default.user.aggregate({
            _count: {
                id: true,
            },
        });
        return countUser._count.id;
    }
}
exports.CountUserService = CountUserService;
