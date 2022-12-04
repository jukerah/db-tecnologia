import { Router, Request, Response  } from 'express';
import multer from 'multer';
import uploadConfig from '../config/multer';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import { countUserController } from '../controllers/user/CountUserController';
import { createUserController } from '../controllers/user/CreateUserController';
import { updateUserController } from '../controllers/user/UpdateUserController';
import { authUserController } from '../controllers/user/AuthUserController';
import { detailUserController } from '../controllers/user/DetailUserController';
import { passwordRecoveryController } from '../controllers/user/PasswordRecoveryController';

import { createProjectController } from '../controllers/project/CreateEmployeeController';
import { listProjectController } from '../controllers/project/ListProjectController';
import { listProjectByIdController } from '../controllers/project/ListProjectById';
import { updateProjectController } from '../controllers/project/UpdateProjectController';
import { removeProjectController } from '../controllers/project/RemoveProjectController';

import { createEmployeeController } from '../controllers/employee/CreateEmployeeController';
import { listEmployeeController } from '../controllers/employee/ListEmployeeController';
import { listEmployeeByIdController } from '../controllers/employee/ListEmployeeById';
import { updateEmployeeController } from '../controllers/employee/UpdateEmployeeController';
import { removeEmployeeController } from '../controllers/employee/RemoveEmployeeController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get('/', (req: Request, res: Response) => {
  return res.json({ status: "Servidor Online!" });
});

// User
router.get('/user', countUserController.handle);
router.post('/user', createUserController.handle);
router.put('/user', isAuthenticated, updateUserController.handle);
router.post('/session', authUserController.handle);
router.get('/me', isAuthenticated, detailUserController.handle);
router.post('/password-recovery', passwordRecoveryController.handle);

// Project
router.post('/project', isAuthenticated, upload.single('file'), createProjectController.handle);
router.get('/projects', listProjectController.handle);
router.get(`/project/:id`, listProjectByIdController.handle);
router.put('/project', isAuthenticated, upload.single('file'), updateProjectController.handle);
router.delete('/project', isAuthenticated, removeProjectController.handle);

// Employee
router.post('/employee', isAuthenticated, upload.single('file'), createEmployeeController.handle);
router.get('/employees', listEmployeeController.handle);
router.get(`/employee/:id`, listEmployeeByIdController.handle);
router.put('/employee', isAuthenticated, upload.single('file'), updateEmployeeController.handle);
router.delete('/employee', isAuthenticated, removeEmployeeController.handle);

export { router };