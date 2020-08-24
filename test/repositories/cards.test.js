const { cardsRepository } = require('../../src/repositories');
const { credit, debit } = require('../../src/domain/cards');

describe('CardsRepository tests', () => {
    test('should find credit card by code', () => {
        // given
        const cardCode = '**** **** **** 4200';
        // when
        const card = cardsRepository.findByCode(cardCode);
        // then
        const { code, type, securityCode } = card;
        expect(code).toBe(cardCode);
        expect(type).toBe('credit');
        expect(securityCode).toBe('042');
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

    test('should not find card by unknown code', () => {
        // given
        const cardCode = '**** **** **** 0021';
        // when
        const card = cardsRepository.findByCode(cardCode);
        // then
        expect(card).toBeUndefined();
    });

    test('should find all cards', () => {
        // given
        const cards = [credit, debit];
        const cardsSerialized = JSON.stringify(cards, null, 2);
        // when
        const foundCards = cardsRepository.findAll();
        const foundCardsSerialized = JSON.stringify(foundCards, null, 2);
        // then
        expect(foundCardsSerialized).toBe(cardsSerialized);
    });
});
