import { Request, Response } from "express";
declare class UpdateProjectController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const updateProjectController: UpdateProjectController;
export {};
