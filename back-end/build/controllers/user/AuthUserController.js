"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
class AuthUserController {
    async handle(req, res) {
        const { username, password } = req.body;
        const authUserService = new AuthUserService_1.AuthUserService();
        const auth = await authUserService.execute({
            username,
            password
        });
        return res.json(auth);
    }
}
exports.authUserController = new AuthUserController();
