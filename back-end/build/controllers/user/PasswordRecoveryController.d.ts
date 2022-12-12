import { Request, Response } from "express";
declare class PasswordRecoveryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const passwordRecoveryController: PasswordRecoveryController;
export {};
