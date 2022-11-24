import prismaClient from "../../prisma";

class DetailUserService {
  async execute(id_user: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id_user
      },
      select: {
        id: true,
        username: true,
        email: true
      }
    })

    return user;
  }
}

export { DetailUserService }