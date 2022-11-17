import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  id_user: string;
  username: string;
  email: string;
  password: string;
}

class UpdateUserService {
  async execute({ id_user, username, email, password }: UserRequest) {    
    if (username) {
      await prismaClient.user.update({
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

      return {"status": "Username successfully saved!"};
    }

    if (email) {
      await prismaClient.user.update({
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

      return {"status": "Email successfully saved!"};
    }
    
    if (password) {
      const passwordHash = await hash(password, 8);

      await prismaClient.user.update({
        where: {
          id: id_user,
        },
        data: {
          password: passwordHash
        }
      });

      return {"status": "Password successfully saved!"};
    }
  }
}

export { UpdateUserService }