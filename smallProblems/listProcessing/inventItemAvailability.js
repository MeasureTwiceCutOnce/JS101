let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(item,transactions) {
    let quantity = 0;
    let targetItems = transactionsFor(item,transactions);

    targetItems.forEach(obj => {
        return obj.movement === "in" ? quantity += obj.quantity : quantity -= obj.quantity;
    })

    console.log(quantity > 0)
}

function transactionsFor(inventoryItem, transactions) {
    return transactions.filter(inventory => inventory.id === inventoryItem);
  }

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

// Thankfully, my answer above is correct and very similar to the LS answer, however, I think I went wrong in where I put my return word originally. The LS answer puts the return word not before the entire if else statement but at the two responses of the if else statement as seen below.
function isItemAvailable(item, transactions) {
    let quantity = transactionsFor(item, transactions).reduce(
      (sum, transaction) => {
        if (transaction.movement === "in") {
          return sum + transaction.quantity;
        } else {
          return sum - transaction.quantity;
        }
      },
      0
    );
    return quantity > 0;
  }


// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// Sam's use of the reduce method below is a great way to do this problem.
function isItemAvailable(id, log) {
    let logOfItem = log.filter(transaction => transaction.id === id);
    let quantityOnHand = logOfItem.reduce((acc, transaction) => {
      if (transaction.movement === 'in') acc += transaction.quantity;
      else acc -= transaction.quantity;

      return acc;
    },0);

    return quantityOnHand > 0;
  }
