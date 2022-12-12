interface UserRequest {
    id_user: string;
    username: string;
    email: string;
    password: string;
}
declare class UpdateUserService {
    execute({ id_user, username, email, password }: UserRequest): Promise<{
        message: string;
    }>;
}
export { UpdateUserService };
