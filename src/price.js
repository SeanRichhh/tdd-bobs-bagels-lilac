const inventory = require("./inventory.js")


class Price {
    constructor(){
        
    }
    getItemPrice(product) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === product) {
                return `The price of the item is £${inventory[i].price}`
            }
        }
        return 'The product is not available'
    }
    getBasketTotal(basket) {
        let totalPrice = 0;
        for (let i = 0; i < basket.length; i++) {
            totalPrice += basket[i].price
        }
        return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
    }

}

module.exports = Price