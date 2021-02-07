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

// console.log(transactions[0]["id"])

function transactionsFor(item, transactions) {
    let targetArray = [];

    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i]["id"] === item) {
            targetArray.push(transactions[i])
        }
    }

    return targetArray;
}
console.log((transactionsFor(101, transactions)).map(obj => obj.quantity));

// My answer is above it worked just fine, but this is why you good to school because they are supposed to teach you how to do things right. The LS answer below did a good job keeping the function short by using the filter method as opposed to using the for loop as I did.
// function transactionsFor(inventoryItem, transactions) {
//     return transactions.filter(inventory => inventory.id === inventoryItem);
//   }



// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Write a function that takes two arguments, inventoryItem and transactions, and returns an array containing only the transactions for the specified inventoryItem.