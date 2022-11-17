import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ username, email, password }: UserRequest) {    
    const userAlreadyRegistered = await prismaClient.user.aggregate({
      _count: {
        id: true,
      },
    });

    if (userAlreadyRegistered._count.id != 0) throw new Error("There is already a registered user!");

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        username: username,
        email: email,
        password: passwordHash
      },
      select: {
        id: true,
        username: true,
        email: true
      }
    });

    return user;
  }
}

export { CreateUserService }