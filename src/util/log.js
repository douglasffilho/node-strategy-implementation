const debug = require('debug');
const log = debug('app');

class Log {
    constructor(namespace, infoLog, errorLog) {
        this.namespace = namespace;
        this.infoLog = infoLog;
        this.errorLog = errorLog;
    }

    info(message, ...args) {
        this.infoLog(`from=${this.namespace}, message=${message}`, ...args);
    }

    error(message, ...args) {
        this.errorLog(`from=${this.namespace}, message=${message}`, ...args);
    }
}

const init = (source) => {
    const errorLog = log.extend('error');
    const infoLog = log.extend('info');

    return new Log(source, infoLog, errorLog);
};

module.exports = init;
