import express from 'express';
import cors from 'cors';
import { logger } from '../infrastructure/database/mongodb/logger/pino.logger';


const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    logger.info({message: 'Incoming Request', method: req.method, url: req.url}),
    next();
});



export default app;