const { cardsRepository } = require('../../src/repositories');

describe('CardsRepository tests', () => {
    test('should find credit card by code', () => {
        // given
        const cardCode = '**** **** **** 4200';
        // when
        const card = cardsRepository.findByCode(cardCode);
        // then
        const { code, type } = card;
        expect(code).toBe(cardCode);
        expect(type).toBe('credit');
    });

    test('should find debit card by code', () => {
        // given
        const cardCode = '**** **** **** 0042';
        // when
        const card = cardsRepository.findByCode(cardCode);
        // then
        const { code, type } = card;
        expect(code).toBe(cardCode);
        expect(type).toBe('debit');
    });
});
