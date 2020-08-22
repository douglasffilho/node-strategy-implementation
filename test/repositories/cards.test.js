const { cardsRepository } = require('../../src/repositories');

describe('CardsRepository tests', () => {
    test('should get amount of credit card', () => {
        // when
        const { amount } = cardsRepository.credit;
        // then
        expect(amount).toBe(Number(4200.0));
    });

    test('should get amount of debit card', () => {
        // when
        const { amount } = cardsRepository.debit;
        // then
        expect(amount).toBe(Number(420.0));
    });
});
