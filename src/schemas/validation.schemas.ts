import Joi from "joi";
import {Task} from '../protocols/Task'

export const task = Joi.object<Task> ({
    id: Joi.number(),
    title: Joi.string(),
    description: Joi.string()
})