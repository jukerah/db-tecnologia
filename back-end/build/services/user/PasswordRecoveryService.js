"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRecoveryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const bcryptjs_1 = require("bcryptjs");
const generate_password_1 = __importDefault(require("generate-password"));
class PasswordRecoveryService {
    async execute({ email }) {
        const user = await prisma_1.default.user.findFirst({
            where: {
                email: email,
            },
            select: {
                id: true,
                username: true
            }
        });
        const password = generate_password_1.default.generate({
            length: 10,
            numbers: true
        });
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        await prisma_1.default.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: passwordHash
            }
        });
        let transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD_EMAIL
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Recuperação de Senha DB Tecnologia',
            html: `<h1>Recuperação de Senha</h1>
             <br>
             <p>Caro ${user.username}, foi solicitado a recuperação da sua conta, segue abaixo seus dados para acessar o sistema.</p>
             <p><strong>Usuário:</strong> ${user.username}</p>
             <p><strong>Nova senha:</strong> ${password}</p>
             <a href="${process.env.WEB_URL}/login">Fazer login</a>
             <br>
             <br>
             <p>Atenciosamente,</p>
             <p><strong>Equipe DB Tecnologia</strong></p>
             <a href="${process.env.WEB_URL}">${process.env.WEB_URL}</a>
             `
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                console.log(err);
            else
                console.log('Email sent: ' + info.response);
        });
        return { "message": "Password sent to email!" };
    }
}
exports.PasswordRecoveryService = PasswordRecoveryService;
