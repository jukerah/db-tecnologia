import { Request, Response } from "express";
declare class ListProjectByIdController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const listProjectByIdController: ListProjectByIdController;
export {};
