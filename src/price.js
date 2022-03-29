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
        return totalPrice
    }

    getBasketTotalMessage(basket){
        const totalPrice = this.getBasketTotal(basket)

        return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
    }

    getReceipt(){
       const totalPrice = this.getBasketTotal(basket)
       
        let date = new Date()

        // Start with an empty string        
        let receipt = ""


        // Receipt heading
        receipt += "===============\n"
        //   Use date where needed
        receipt += ` Date: ${date}\n`
        // Receipt details
        //   Use basket contents to create receipt for each type of bagel
        // Receipt total
        receipt += " totalPrice: ${totalPrice}\n"
        // Receipt footer
        //   Use date where needed

        return receipt

    }

}

module.exports = Price