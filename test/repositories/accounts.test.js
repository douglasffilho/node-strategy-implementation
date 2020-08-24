const { accountsRepository } = require('../../src/repositories');
const { debit, credit } = require('../../src/domain/accounts');

describe('Accounts Repository tests', () => {
    test('should find account for credit card by code', () => {
        // given
        const cardCode = '**** **** **** 4200';
        const serializedCreditAccount = JSON.stringify(credit, null, 2);
        // when
        const foundAccount = accountsRepository.findByCardCode(cardCode);
        const serializedFoundAccount = JSON.stringify(foundAccount, null, 2);
        //then
        expect(serializedFoundAccount).toBe(serializedCreditAccount);
    });

    test('should find account for debit card by code', () => {
        // given
        const cardCode = '**** **** **** 0042';
        const serializedDebitAccount = JSON.stringify(debit, null, 2);
        // when
        const foundAccount = accountsRepository.findByCardCode(cardCode);
        const serializedFoundAccount = JSON.stringify(foundAccount, null, 2);
        //then
        expect(serializedFoundAccount).toBe(serializedDebitAccount);
    });

    test('should get undefined for unknow card code', () => {
        // given
        const cardCode = '**** **** **** 0021';
        // when
        const foundAccount = accountsRepository.findByCardCode(cardCode);
        //then
        expect(foundAccount).toBeUndefined();
    });
});
