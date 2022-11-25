import prismaClient from "../../prisma";

class CountUserService {
  async execute() {    
    const countUser = await prismaClient.user.aggregate({
      _count: {
        id: true,
      },
    });

    return countUser._count.id;
  }
}

export { CountUserService }