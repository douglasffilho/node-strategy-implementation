const process = require('process');

const CloseAppAction = {
    run() {
        return process.exit(0);
    }
};

module.exports = CloseAppAction;
