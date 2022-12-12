import { Request, Response } from "express";
declare class RemoveEmployeeController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const removeEmployeeController: RemoveEmployeeController;
export {};
