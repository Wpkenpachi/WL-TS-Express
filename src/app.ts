import express from 'express';
import { home } from './routes';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api/home", home.default);

export default app;