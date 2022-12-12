import { Request, Response } from "express";
declare class CountUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const countUserController: CountUserController;
export {};
