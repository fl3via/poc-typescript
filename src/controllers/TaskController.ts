import { Request, Response } from 'express';
import listRepository from '../Repository/listRepository';
import httpStatus from 'http-status'

export async function createTask(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const task = await listRepository.createTask(title, description);
    res.status(httpStatus.CREATED).json(task);
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Erro interno do servidor');
  }
}

export async function getTask(req: Request, res: Response) {
  try {
    const tasks = await listRepository.getTask();
    res.status(httpStatus.OK).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Erro interno do servidor');
  }
}

export async function taskDelete(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const deleted = await listRepository.taskDelete(id);
    
    if (!deleted) {
      res.status(httpStatus.NOT_FOUND).send('Tarefa não encontrada');
    
    }

    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Erro interno do servidor');
  }
}

export async function taskUpdate(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const task = await listRepository.taskUpdate(id, title, description);
    
    if (!task) {
      res.status(httpStatus.NOT_FOUND).send('Tarefa não encontrada');
      return;
    }

    res.status(httpStatus.OK).json(task);
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Erro interno do servidor');
  }
}
