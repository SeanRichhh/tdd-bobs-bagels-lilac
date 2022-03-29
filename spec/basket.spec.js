const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });

  it("create and add a item to the basket", () => {
    const expected = [{
      item: "BGLO",
      price: 0.49,
      name: "Bagel",
      variant: "Onion"
  }]
    basket.addItemToBasket('BGLO')  
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can add more than one item to the basket", () => {
    const expected = [
      {
        item: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion"
      },
      {
        item: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
      }
    ]
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can remove one item from the basket", () => {
    const expected = [
      {
        item: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
      }
    ]
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.removeItemFromBasket('BGLO')
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user can remove more than one item from the basket", () => {
    const expected = [
      {
        item: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
      },
      {
        item: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything"
      }
    ]
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    basket.addItemToBasket('BGLS')
    basket.removeItemFromBasket('BGLO')
    basket.removeItemFromBasket('BGLS')
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });

  it("a user cannot add more than capacity of Basket", () => {
    const expected = 'Your basket is full, you can not add anymore items!'
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    basket.addItemToBasket('BGLS')
    basket.addItemToBasket('BGSS')
    const result = basket.addItemToBasket('BGSE')
    expect(result).toEqual(expected);
  });

  it("if the user tries to add more than 5 items, the basket will be full, the overfill will be discarded and an error message will be displayed", () => {
    const expected = [
      {
        item: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion"
      },
      {
        item: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
      },
      {
        item: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything"
      },
      {
        item: "BGLS",
        price: 0.49,
        name: "Bagel",
        variant: "Sesame"
      },
      {
        item: "BGSE",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Everything",
      }
    ]
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    basket.addItemToBasket('BGLS')
    basket.addItemToBasket('BGSE')
    basket.addItemToBasket('BGLO')
    const result = basket.showBasket('BGSE')
    expect(result).toEqual(expected);
  });

  it("a user cannot remove an item that does not exist from the basket", () => {
    const expected = 'The item does not exist in your basket!'
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    const result = basket.removeItemFromBasket('BGLS')
    expect(result).toEqual(expected);
  });

  it("Bob's bagel manager can create baskets with larger capacity", () => {
    const expected = [
      {
        item: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion"
      },
      {
        item: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Plain"
      },
      {
        item: "BGLE",
        price: 0.49,
        name: "Bagel",
        variant: "Everything"
      },
      {
        item: "BGLS",
        price: 0.49,
        name: "Bagel",
        variant: "Sesame"
      },
      {
        item: "BGSE",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Everything",
      },
      {
        item: "BGSS",
        price: 4.99,
        name: "Bagel Sandwich",
        variant: "Sesame",
      },
      {
        item: "BGSN",
        price: 2.99,
        name: "Bagel Sandwich",
        variant: "Nutella",
      }
    ]
    basket.basketSize = 10
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    basket.addItemToBasket('BGLS')
    basket.addItemToBasket('BGSE')
    basket.addItemToBasket('BGSS')
    basket.addItemToBasket('BGSN')
    const result = basket.showBasket()
    expect(result).toEqual(expected);
  });
//Moved to another spec file 
  // it("a user can check item price before adding it to the basket", () => {
  //   const expected = 'The price of the item is £2.99'
  //   const result = basket.getItemPrice('BGSN')
  //   expect(result).toEqual(expected);
  // });

  // it("a user knows the total price of the items in their basket", () => {
  //   const expected = 'The total price of the items in your basket is £1.37'
  //   basket.addItemToBasket('BGLO')
  //   basket.addItemToBasket('BGLP')
  //   basket.addItemToBasket('BGLS')
  //   const result = basket.getBasketTotal()
  //   expect(result).toEqual(expected);
  // });
  it("creates larger basket", () => {
    basket.createBasket(6)
   
    
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLE')
    basket.addItemToBasket('BGLS')
    basket.addItemToBasket('BGSS')
    basket.addItemToBasket('BGSN')

    // expect(basket.basket.length).toEqual(basket.basketSize)
    const result = basket.addItemToBasket('BGSN')

    console.log('basket',basket.basket.length)
    expect(basket.basket.length).toEqual(basket.basketSize)
    expect(result).toEqual('Your basket is full, you can not add anymore items!')
    console.log(result)
  });

});

