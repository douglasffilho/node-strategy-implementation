const defaultAction = require('./actions/default');
const closeAppAction = require('./actions/close-app');
const log = require('../util/Log')('action-strategy');

const actions = {
    default: defaultAction,
    close: closeAppAction
};

const ActionsStrategy = {
    runAction(actionDefinition) {
        const action = actions[actionDefinition] || actions.default;
        try {
            action.run();
        } catch (error) {
            log.error(error.message);
        }
    }
};

module.exports = ActionsStrategy;
