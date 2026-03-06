import express from 'express';
import cors from 'cors';
import { logger } from '../infrastructure/database/mongodb/logger/pino.logger';
import router from './routes/routes';
import { mongoConnection } from '../infrastructure/database/mongodb/mongodb.connection';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
    logger.info({message: 'Incoming Request', method: req.method, url: req.url}),
    next();
});

mongoConnection().then(() => {
    app.listen(PORT, ()=> 
        logger.info({message: `Server running on port ${PORT}`, method: 'GET', url: '/'}),
    )
})

export default app;
