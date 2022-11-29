import prismaClient from "../../prisma";

class ListProjectService{
  async execute() {
    const listProject = await prismaClient.project.findMany({
      select: {
        id: true,
        name: true,
        project_url: true,
        banner: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return listProject;
  }
}

export { ListProjectService }