
const logger = require('pino')
const dayjs = require('dayjs')
const level = process.env.LOG_LEVL

const log = logger({
    level,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logger;