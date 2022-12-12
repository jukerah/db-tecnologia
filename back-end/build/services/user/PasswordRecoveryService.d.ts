interface UserRequest {
    email: string;
}
declare class PasswordRecoveryService {
    execute({ email }: UserRequest): Promise<{
        message: string;
    }>;
}
export { PasswordRecoveryService };
