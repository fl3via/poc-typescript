"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = require("../controllers/TaskController");
const router = (0, express_1.Router)();
const taskController = new TaskController_1.TaskController();
router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
exports.default = router;
