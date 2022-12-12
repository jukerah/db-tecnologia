interface AuthRequest {
    username: string;
    password: string;
}
declare class AuthUserService {
    execute({ username, password }: AuthRequest): Promise<{
        id: string;
        username: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
