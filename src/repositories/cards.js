const { credit, debit } = require('../domain/cards');
const cards = [credit, debit];

const CardsRespository = {
    findByCode(cardCode) {
        return cards.filter(card => card.code === cardCode) || {};
    }
};

module.exports = CardsRespository;
