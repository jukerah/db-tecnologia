"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../config/multer"));
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const CountUserController_1 = require("../controllers/user/CountUserController");
const CreateUserController_1 = require("../controllers/user/CreateUserController");
const UpdateUserController_1 = require("../controllers/user/UpdateUserController");
const AuthUserController_1 = require("../controllers/user/AuthUserController");
const DetailUserController_1 = require("../controllers/user/DetailUserController");
const PasswordRecoveryController_1 = require("../controllers/user/PasswordRecoveryController");
const CreateEmployeeController_1 = require("../controllers/project/CreateEmployeeController");
const ListProjectController_1 = require("../controllers/project/ListProjectController");
const ListProjectById_1 = require("../controllers/project/ListProjectById");
const UpdateProjectController_1 = require("../controllers/project/UpdateProjectController");
const RemoveProjectController_1 = require("../controllers/project/RemoveProjectController");
const CreateEmployeeController_2 = require("../controllers/employee/CreateEmployeeController");
const ListEmployeeController_1 = require("../controllers/employee/ListEmployeeController");
const ListEmployeeById_1 = require("../controllers/employee/ListEmployeeById");
const UpdateEmployeeController_1 = require("../controllers/employee/UpdateEmployeeController");
const RemoveEmployeeController_1 = require("../controllers/employee/RemoveEmployeeController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default);
router.get("/", (req, res) => {
    return res.json({ status: "Servidor Online!" });
});
// User
router.get("/user", CountUserController_1.countUserController.handle);
router.post("/user", CreateUserController_1.createUserController.handle);
router.put("/user", isAuthenticated_1.isAuthenticated, UpdateUserController_1.updateUserController.handle);
router.post("/session", AuthUserController_1.authUserController.handle);
router.get("/me", isAuthenticated_1.isAuthenticated, DetailUserController_1.detailUserController.handle);
router.post("/password-recovery", PasswordRecoveryController_1.passwordRecoveryController.handle);
// Project
router.post("/project", isAuthenticated_1.isAuthenticated, upload.single("file"), CreateEmployeeController_1.createProjectController.handle);
router.get("/projects", ListProjectController_1.listProjectController.handle);
router.get(`/project/:id`, ListProjectById_1.listProjectByIdController.handle);
router.put("/project", isAuthenticated_1.isAuthenticated, upload.single("file"), UpdateProjectController_1.updateProjectController.handle);
router.delete("/project", isAuthenticated_1.isAuthenticated, RemoveProjectController_1.removeProjectController.handle);
// Employee
router.post("/employee", isAuthenticated_1.isAuthenticated, upload.single("file"), CreateEmployeeController_2.createEmployeeController.handle);
router.get("/employees", ListEmployeeController_1.listEmployeeController.handle);
router.get(`/employee/:id`, ListEmployeeById_1.listEmployeeByIdController.handle);
router.put("/employee", isAuthenticated_1.isAuthenticated, upload.single("file"), UpdateEmployeeController_1.updateEmployeeController.handle);
router.delete("/employee", isAuthenticated_1.isAuthenticated, RemoveEmployeeController_1.removeEmployeeController.handle);
