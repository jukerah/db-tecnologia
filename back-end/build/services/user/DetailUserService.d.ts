declare class DetailUserService {
    execute(id_user: string): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
}
export { DetailUserService };
