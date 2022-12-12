import { Request, Response } from "express";
declare class CreateProjectController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const createProjectController: CreateProjectController;
export {};
