const InitialQuestion = {
    type: 'select',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
        { title: 'Shop', value: 'shop' },
        { title: 'See Cart', value: 'cart' },
        { title: 'Account Balance', value: 'balance' },
        { title: 'Orders', value: 'orders' },
        { title: 'Close App', value: 'close' }
    ]
};

module.exports = InitialQuestion;
