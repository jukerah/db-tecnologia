"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const UpdateUserService_1 = require("../../services/user/UpdateUserService");
class UpdateUserController {
    async handle(req, res) {
        const { id_user, username, email, password } = req.body;
        if (!id_user)
            throw new Error("ID is required!");
        if (!username && !email && !password) {
            throw new Error("Username, email and password is required!");
        }
        const searchUser = await prisma_1.default.user.findUnique({
            where: {
                id: id_user
            }
        });
        if (!searchUser)
            return res.status(404).json({ error: "User not found!" });
        const createUserService = new UpdateUserService_1.UpdateUserService();
        const user = await createUserService.execute({
            id_user,
            username,
            email,
            password
        });
        return res.json(user);
    }
}
exports.updateUserController = new UpdateUserController();
