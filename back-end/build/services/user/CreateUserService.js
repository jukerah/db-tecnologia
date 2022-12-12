"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    async execute({ username, email, password }) {
        const userAlreadyRegistered = await prisma_1.default.user.aggregate({
            _count: {
                id: true,
            },
        });
        if (userAlreadyRegistered._count.id != 0)
            throw new Error("There is already a registered user!");
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        const user = await prisma_1.default.user.create({
            data: {
                username: username,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                username: true,
                email: true
            }
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
