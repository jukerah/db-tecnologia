import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
import { hash } from "bcryptjs";
import generator from "generate-password";

interface UserRequest {
  email: string;
}

class PasswordRecoveryService {
  async execute({ email }: UserRequest) {    
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
        username: true
      }
    });

    const password = generator.generate({
      length: 10,
      numbers: true
    });

    const passwordHash = await hash(password, 8);

      await prismaClient.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: passwordHash
        }
      });

    let transporter = nodemailer.createTransport({ 
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
             <p><strong>Senha:</strong> ${password}</p>
             <a href="${process.env.WEB_URL}/login">Fazer login</a>
             <br>
             <br>
             <p>Atenciosamente,</p>
             <p><strong>Equipe DB Tecnologia</strong></p>
             <a href="${process.env.WEB_URL}">${process.env.WEB_URL}</a>
             `
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if(err)
        console.log(err);
      else
        console.log('Email sent: ' + info.response);
    });

    return {"message": "Password sent to email!"};
  }
}

export { PasswordRecoveryService }