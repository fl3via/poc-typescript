"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
const taskService = new TaskService_1.TaskService();
class TaskController {
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield taskService.getAllTasks();
            res.json(tasks);
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = req.body;
            const task = { id: 0, title, description };
            yield taskService.createTask(task);
            res.status(201).send('Task created successfully');
        });
    }
}
exports.TaskController = TaskController;
