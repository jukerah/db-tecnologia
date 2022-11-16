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
    if (!id_user) throw new Error("ID is required!");
    
    if (username) {
      const user = await prismaClient.user.update({
        where: {
          id: id_user,
        },
        data: {
          username: username,
        }
      });

      return user;
    }

    if (email) {
      const user = await prismaClient.user.update({
        where: {
          id: id_user,
        },
        data: {
          email: email,
        }
      });

      return user;
    }
    
    if (password) {
      const passwordHash = await hash(password, 8);

      const user = await prismaClient.user.update({
        where: {
          id: id_user,
        },
        data: {
          password: passwordHash
        }
      });

      return user;
    }
  }
}

export { UpdateUserService }