const prompts = require('prompts');
const questions = require('./domain/questions');
const actionsStrategy = require('./domain/actions-strategy');

const promptByAction = async () => {
    const response = await prompts(questions.initial);
    if (!response.action)
        return promptByAction();
    return response.action;
};

(async () => {
    const action = await promptByAction();
    actionsStrategy.runAction(action);
})();

