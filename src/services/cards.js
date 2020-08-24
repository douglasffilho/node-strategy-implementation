const { cardsRepository, accountsRepository } = require('../repositories');

const CardsService = {
    listCardsCodes() {
        return cardsRepository.findAll().map(card => card.code);
    },
    accountBalance(cardCode) {
        const card = cardsRepository.findByCode(cardCode);
        if (!card) throw new Error('card not found');

        const account = accountsRepository.findByCardCode(card.code);
        if (!account) throw new Error('account not found');

        return account.balance;
    }
};

module.exports = CardsService;
