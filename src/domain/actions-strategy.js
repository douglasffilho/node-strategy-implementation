const { defaultAction, closeAppAction } = require('./actions');
const log = require('../util/log')('action-strategy');

const actions = {
    default: defaultAction,
    close: closeAppAction
};

const ActionsStrategy = {
    runAction(actionDefinition) {
        const action = actions[actionDefinition] || actions.default;
        try {
            return action.run();
        } catch (error) {
            log.error(error.message);
            return false;
        }
    },
    // For test purposes
    injectAction(name, action) {
        actions[name] = action;
    }
};

module.exports = ActionsStrategy;
