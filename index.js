let items = require('./data.js');

//#1

function averagePrice () {
  let prices = items.map(function (item) {return item.price;});
  let totalPrice = prices.reduce(function (acc, val) {return acc + val;});
  let arrayLength = items.length;
  return totalPrice / arrayLength;
}

let average = averagePrice();

console.log("1. The average Price is $",average.toPrecision(4));


//#2


let shirtCount = items.filter(object => object.price >= 14.00 && object.price <= 18.00)
.map(function (item) {return [item.title, item.price]});

console.log("2. The array is", shirtCount);


//#3


let gbpItem = items.filter(object => object.currency_code === "GBP")
.map(function (item) {return [item.title, item.price]});

console.log("3. The item is", gbpItem);


//#4


let woodItems = items.filter(object => object.materials[0] === "wood" ||
object.materials[1] === "wood" || object.materials[2] === "wood" ||
object.materials[3] === "wood" || object.materials[4] === "wood" ||
object.materials[5] === "wood")
.map(function (item) {return item.title});

console.log("4. Here is the list", woodItems);


//#5


let eightOrMoreItems = items.filter(object => object.materials.length >= 8])
.map(function (item) {return [item.title, item.materials.length, item.materials]});

console.log("5. The items are", eightOrMoreItems);


//#6


let sellerItems = items.filter(object => object.who_made === "i_did")

console.log("6. This many items were made by their seller:", sellerItems.length);
