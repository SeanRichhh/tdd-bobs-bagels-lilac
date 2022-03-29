const inventory = require("./inventory.js");
const Price = require("./price.js")

class Basket {
    constructor() {
        this.basket = [];
        this.basketSize = 5;
        this.price = new Price()
    };
    // Changed the sku to item
    addItemToBasket(item) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === item && this.basket.length < this.basketSize) {
                this.basket.push(inventory[i]);
                return "Item in the basket"
            }
        }
        return 'Your basket is full, you can not add anymore items!'
    };

    removeItemFromBasket(item) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].item === item) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

    showBasket() {
        return this.basket
    }
    createBasket(sizeOfBasket) {
        this.basketSize = sizeOfBasket
        console.log(this.basketSize)
    }
    getBasketTotal() {
        return this.price.getBasketTotal(this.basket)
    }

};

module.exports = Basket;
