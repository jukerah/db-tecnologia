"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken)
        return res.status(401).json({
            error: "User not authenticated."
        }).end();
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.id_user = sub;
        return next();
    }
    catch (err) {
        return res.status(401).json({
            error: "User not authenticated."
        }).end();
    }
};
exports.isAuthenticated = isAuthenticated;
