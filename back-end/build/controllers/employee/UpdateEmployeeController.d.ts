import { Request, Response } from "express";
declare class UpdateEmployeeController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const updateEmployeeController: UpdateEmployeeController;
export {};
