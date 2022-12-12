interface UserRequest {
    username: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ username, email, password }: UserRequest): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
}
export { CreateUserService };
