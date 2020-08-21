const closeAppAction = require('../../../src/domain/actions/close-app');
const process = require('process');

describe('Close App Action tests', () => {
    test('process should exit', () => {
        // given
        process.exit = (code) => `called code ${code}`;

        // when
        const result = closeAppAction.run();

        // then
        expect(result).toBe('called code 0');
    });
});
