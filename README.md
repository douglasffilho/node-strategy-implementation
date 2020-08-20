# node-strategy-implementation
Implementation of Strategy Design Pattern

---
### The main focus of this project is to show how we can implement an clean node strategy to apply customer payment on a isolated scenary

---
### Requirements
- NPM installed locally (suggested version 11.11.0)
    - You can try [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)
- Yarn installed locally (suggested version 1.22.4)
    - `npm i -g yarn`
- Install dependencies using Yarn
    - `yarn`

---
### Run Through Tests
`yarn test`

### Or run through your own input
`yarn start`

### 
You should know some informations before:
- You have a **debit card** with **$420.00** ending with code **0042**
- You have a **credit card** with **$4200.00** credit limit ending with code **4200** and with security code equals **042** (try buy something with wrong sec code and see all fail)
- You can divide your credit payment up to **10** installments
