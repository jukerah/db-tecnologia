import { Router, Request, Response  } from 'express';
import multer from 'multer';
import uploadConfig from '../config/multer';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { UpdateUserController } from '../controllers/user/UpdateUserController';
import { AuthUserController } from '../controllers/user/AuthUserService';

import { CreateEmployeeController } from '../controllers/employee/CreateEmployeeController';
import { ListEmployeeController } from '../controllers/employee/ListEmployeeController';
import { UpdateEmployeeController } from '../controllers/employee/UpdateEmployeeController';
import { RemoveEmployeeController } from '../controllers/employee/RemoveEmployeeController';

import { CreateProjectController } from '../controllers/project/CreateEmployeeController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get('/', (req: Request, res: Response) => {
  return res.json({ status: "Servidor Online!" });
});

// User
router.post('/user', new CreateUserController().handle);
router.put('/user', isAuthenticated, new UpdateUserController().handle);
router.post('/session', new AuthUserController().handle);
//router.post('/recovery', new RecoveryController().handle);

// Project
router.post('/project', isAuthenticated, upload.single('file'), new CreateProjectController().handle);
//router.get('/projects', new ListProjectController().handle);
//router.put('/project', isAuthenticated, new UpdateProjectController().handle);
//router.delete('/project', isAuthenticated, new DeleteProjectController().handle);

// Employee
router.post('/employee', isAuthenticated, upload.single('file'), new CreateEmployeeController().handle);
router.get('/employees', new ListEmployeeController().handle);
router.put('/employee', isAuthenticated, upload.single('file'), new UpdateEmployeeController().handle);
router.delete('/employee', isAuthenticated, new RemoveEmployeeController().handle);

export { router };