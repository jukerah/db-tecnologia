import { Request, Response } from "express";
declare class ListProjectController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const listProjectController: ListProjectController;
export {};
