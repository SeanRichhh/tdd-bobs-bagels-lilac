const inventory = require("./inventory.js");
class Basket {
    constructor() {
        this.basket = [];
        this.basketSize = 5;
    };
    // Changed the sku to item
    addItemToBasket(item) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === item && this.basket.length < this.basketSize) {
                this.basket.push(inventory[i]);
                return "Item in the basket"
            }
        }
        return "You cannot add more than 5 items to your basket!"
    };

    removeItemFromBasket(item) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].item === item) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

    getItemPrice(product) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === product) {
                return `The price of the item is £${inventory[i].price}`
            }
        }
        return 'The product is not available'
    }

    showBasket() {
        return this.basket
    }

    getBasketTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.basket.length; i++) {
            totalPrice += this.basket[i].price
        }
        return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
    }
};

module.exports = Basket;
