import { Request, Response } from "express";
declare class RemoveProjectController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const removeProjectController: RemoveProjectController;
export {};
