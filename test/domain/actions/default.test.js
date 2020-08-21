const defaultAction = require('../../../src/domain/actions/default');

describe('Default Action tests', () => {
    test('should throw Action Not Implemented', () => {
        // when
        let error;
        try {
            defaultAction.run();
        } catch (err) {
            error = err.message;
        }

        // then
        expect(error).toBe('Action Not Implemented');
    });
});
