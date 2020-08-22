const { credit, debit } = require('../domain/cards');

const CardsRespository = {
    credit: {
        ...credit,
        amount: Number(4200.0)
    },
    debit: {
        ...debit,
        amount: Number(420.0)
    }
};

module.exports = CardsRespository;
