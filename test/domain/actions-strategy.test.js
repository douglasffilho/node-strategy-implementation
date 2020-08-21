const actionsStrategy = require('../../src/domain/actions-strategy');

describe('Actions Strategy tests', () => {
    beforeAll(() => {
        const action = {
            run() {
                return true;
            }
        };
        actionsStrategy.injectAction('known-action', action);
    });

    test('should run known action', () => {
        // given
        const actionDefinition = 'known-action';
        // when
        const ran = actionsStrategy.runAction(actionDefinition);
        // then
        expect(ran).toBeTruthy();
    });

    test('should not run a not implemented action', () => {
        // given
        const actionDefinition = 'unknown-action';

        // when
        const ran = actionsStrategy.runAction(actionDefinition);

        // then
        expect(ran).toBeFalsy();
    });
});
