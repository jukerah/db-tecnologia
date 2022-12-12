import { Request, Response } from "express";
declare class CreateEmployeeController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const createEmployeeController: CreateEmployeeController;
export {};
