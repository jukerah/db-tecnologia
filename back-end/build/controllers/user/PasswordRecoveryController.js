"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRecoveryController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const PasswordRecoveryService_1 = require("../../services/user/PasswordRecoveryService");
class PasswordRecoveryController {
    async handle(req, res) {
        const { email } = req.body;
        if (!email)
            throw new Error("Email is required!");
        const searchUser = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (!searchUser)
            return res.status(404).json({ error: "User not found!" });
        const passwordRecoveryService = new PasswordRecoveryService_1.PasswordRecoveryService();
        const user = await passwordRecoveryService.execute({ email });
        return res.json(user);
    }
}
exports.passwordRecoveryController = new PasswordRecoveryController();
