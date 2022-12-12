"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countUserController = void 0;
const CountUserService_1 = require("../../services/user/CountUserService");
class CountUserController {
    async handle(req, res) {
        const countUserService = new CountUserService_1.CountUserService();
        const countUser = await countUserService.execute();
        return res.json({ _count: countUser });
    }
}
exports.countUserController = new CountUserController();
