const { debit, credit } = require('../domain/accounts');
const accounts = [debit, credit];

const AccountsRepository = {
    findByCardCode(cardCode) {
        return accounts.filter((account) => account.cardCode === cardCode)[0];
    }
}

module.exports = AccountsRepository;
