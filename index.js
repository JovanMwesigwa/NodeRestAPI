import express from 'express';
import userRouter from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/users/', userRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))