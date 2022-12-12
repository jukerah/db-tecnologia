"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class UpdateUserService {
    async execute({ id_user, username, email, password }) {
        if (username) {
            await prisma_1.default.user.update({
                where: {
                    id: id_user,
                },
                data: {
                    username: username,
                },
                select: {
                    id: true,
                    username: true
                }
            });
            return { "message": "Username successfully saved!" };
        }
        if (email) {
            await prisma_1.default.user.update({
                where: {
                    id: id_user,
                },
                data: {
                    email: email,
                },
                select: {
                    id: true,
                    email: true
                }
            });
            return { "message": "Email successfully saved!" };
        }
        if (password) {
            const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
            await prisma_1.default.user.update({
                where: {
                    id: id_user,
                },
                data: {
                    password: passwordHash
                }
            });
            return { "message": "Password successfully saved!" };
        }
    }
}
exports.UpdateUserService = UpdateUserService;
