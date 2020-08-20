const process = require('process');

const CloseAppAction = {
    run() {
        process.exit(0);
    }
};

module.exports = CloseAppAction;
