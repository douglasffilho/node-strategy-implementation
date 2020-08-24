const { cardsService } = require('../../src/services');
const { accountsRepository } = require('../../src/repositories');

describe('Cards Service tests', () => {
    test('should list all cards codes', () => {
        // when
        const cardsCodes = cardsService.listCardsCodes();
        // then
        expect(cardsCodes).toEqual([
            '**** **** **** 4200',
            '**** **** **** 0042'
        ]);
    });

    test('should get credit card account balance by card code', () => {
        // given
        const cardCode = '**** **** **** 4200';
        // when
        const balance = cardsService.accountBalance(cardCode);
        // then
        expect(balance).toEqual(Number(4200.0));
    });

    test('should throw card not found error if by unknown card code', () => {
        // given
        const cardCode = '**** **** **** 0021';
        // when
        let error;
        try {
            cardsService.accountBalance(cardCode);
        } catch (err) {
            error = err.message;
        }
        // then
        expect(error).toBe('card not found');
    });

    test('should throw account not found error if by card without account registered', () => {
        // given
        const cardCode = '**** **** **** 4200';
        accountsRepository.findByCardCode = () => undefined;
        // when
        let error;
        try {
            cardsService.accountBalance(cardCode);
        } catch (err) {
            error = err.message;
        }
        // then
        expect(error).toBe('account not found');
    });
});
