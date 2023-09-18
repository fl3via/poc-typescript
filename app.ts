import express, { Express } from 'express';
import { errorHandler } from './src/middleware/errorHandler';
import router from './src/routes/Task.routes'

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
