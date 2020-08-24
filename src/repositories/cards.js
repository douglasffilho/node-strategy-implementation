const { credit, debit } = require('../domain/cards');
const cards = [credit, debit];

const CardsRespository = {
    findAll() {
        return cards;
    },
    findByCode(cardCode) {
        return (cards.filter((card) => card.code === cardCode) || [{}])[0];
    }
};

module.exports = CardsRespository;
