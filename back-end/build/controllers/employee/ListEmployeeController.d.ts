import { Request, Response } from "express";
declare class ListEmployeeController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const listEmployeeController: ListEmployeeController;
export {};
