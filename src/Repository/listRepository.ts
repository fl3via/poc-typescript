import connection from '../database/connection';
import {Task} from '../protocols/Task'


const listRepository = {
  async createTask(title: string, description: string): Promise<Task> {
    const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
    const values = [title, description];

    const result = await connection.query(query, values);
    return result.rows[0];
  },

  async taskDelete(id: number): Promise<void> {
    const query = 'DELETE FROM tasks WHERE id = $1';
    const values = [id];

    await connection.query(query, values);
  },

  async getTask(): Promise<Task[]> {
    const query = 'SELECT * FROM tasks';

    const result = await connection.query(query);
    return result.rows;
  },

  async taskUpdate(id: number, title: string, description: string): Promise<Task> {
    const query = 'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *';
    const values = [title, description, id];

    const result = await connection.query(query, values);
    return result.rows[0];
  },
};

export default listRepository;
