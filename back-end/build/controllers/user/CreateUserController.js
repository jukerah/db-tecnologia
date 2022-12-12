"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
class CreateUserController {
    async handle(req, res) {
        const { username, email, password } = req.body;
        if (!username)
            throw new Error("Username is required!");
        if (!email)
            throw new Error("Email is required!");
        if (!password)
            throw new Error("Password is required!");
        const createUserService = new CreateUserService_1.CreateUserService();
        const user = await createUserService.execute({
            username,
            email,
            password
        });
        return res.json(user);
    }
}
exports.createUserController = new CreateUserController();
