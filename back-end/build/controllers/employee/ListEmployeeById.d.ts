import { Request, Response } from "express";
declare class ListEmployeeByIdController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const listEmployeeByIdController: ListEmployeeByIdController;
export {};
