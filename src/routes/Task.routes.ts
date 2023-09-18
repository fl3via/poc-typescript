import { Router } from 'express';
import * as TaskController from '../controllers/TaskController';
import { createTask, getTask, taskDelete, taskUpdate } from '../controllers/TaskController';
import {errorHandler} from '../middleware/errorHandler'


const router = Router();

router.post('/tasks', errorHandler, TaskController.createTask);
router.get('/tasks', TaskController.getTask);
router.put('/tasks/:id', TaskController.taskUpdate);
router.delete('/tasks/:id', TaskController.taskDelete);

export default router;
