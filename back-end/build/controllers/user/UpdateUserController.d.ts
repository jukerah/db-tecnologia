import { Request, Response } from "express";
declare class UpdateUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const updateUserController: UpdateUserController;
export {};
