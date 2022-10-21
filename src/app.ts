import express from 'express';
import 'express-async-errors';
import carRouter from './routes/car.routes';
import errorHandler from './middlewares/erros';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;
