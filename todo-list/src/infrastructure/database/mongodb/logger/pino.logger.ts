import pino from 'pino';

const logger = pino({
    enabled: process.env.NODE_ENV !== 'test',
    level: process.env.LOG_LEVEL || 'info',
    transport: process.env.NODE_ENV === 'development' ? {
        target: 'pino-pretty',
        options: {colorize: true}
    } : undefined
});

export { logger };