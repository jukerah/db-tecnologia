"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailUserController = void 0;
const DetailUserService_1 = require("../../services/user/DetailUserService");
class DetailUserController {
    async handle(req, res) {
        const id_user = req.id_user;
        const detailUserService = new DetailUserService_1.DetailUserService();
        const user = await detailUserService.execute(id_user);
        return res.json(user);
    }
}
exports.detailUserController = new DetailUserController();
