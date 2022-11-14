import { Router, Request, Response  } from 'express';
import multer from 'multer';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import uploadConfig from '../config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get('/', (req: Request, res: Response) => {
  return res.json({ status: "Servidor Online!" });
});

// User
//router.post('/user', new CreateUserController().handle);
//router.post('/session', new AuthUserController().handle);

// Project
//router.post('/project', isAuthenticated, upload.single('file'), new CreateProjectController().handle);
//router.get('/projects', new ListProjectController().handle);
//router.put('/project', isAuthenticated, new UpdateProjectController().handle);
//router.delete('/project', isAuthenticated, new DeleteProjectController().handle);

// Employee
//router.post('/employee', isAuthenticated, new CreateEmployeeController().handle);
//router.get('/employees', new ListEmployeeController().handle);
//router.put('/employee', isAuthenticated, new UpdateEmployeeController().handle);
//router.delete('/employee', isAuthenticated, new DeleteEmployeeController().handle);

export { router };