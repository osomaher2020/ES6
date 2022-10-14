// ------- Object literal shorthand ----------------
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth: () => {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// in ES6 -- remove unnecessary repetition
const gemstone2 = {
    type,
    color,
    carat,
    calculateWorth() {}
};



// --------------- Iterations ------------------
// for...of loop (ES6)
        // - combines the strengths of -> for loop & for...in
        // - loop over any type of data that is iterable
// * for loop -> have to keep track of the counter and exit condition
// * for...in -> have to deal with the index
// * forEach() -> can only be used with arrays ++ no way to stop or break
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) { // no need for [index]
  console.log(digit);
}

// ** You can stop or break a (for...of) loop at anytime
for (const digit of digits) {
    if (digit % 2 === 0) {
      continue;
    }
    console.log(digit);
}




// ------------- Spread operator ------------------
// written with three consecutive dots ( ... )
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
let produce = fruits.concat(vegetables); // ES5 -> .concat()
console.log(produce); // Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

produce = [fruits, vegetables];
console.log(produce); // Prints: [ [ 'apples', 'bananas', 'pears' ], [ 'corn', 'potatoes', 'carrots' ] ] X X X X



// -------------- Rest parameter ------------------
// written with three consecutive dots ( ... )
// ** allows you to represent an indefinite number of elements as an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order; // items -> is assigned the rest of the values (as an array)
console.log(total, subtotal, tax, items);

// ****  rest parameter is the opposite of the spread operator
// *** spread operator is like -> unboxing all of the contents of a package.
// *** rest parameter is like -> taking all the contents and putting them back into the package




// ------------------------ Variadic functions -----------------------
// ** functions that take an indefinite (i.e: arbitrary || unlimited) number of arguments

// Example 1 -->
// ES5
function sum() {
    let total = 0;
    for(const argument of arguments) { // arguments object is an array-like object -- available as a local variable inside all functions
      total += argument;
    }
    return total;
}

sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

// ES6 --- with Rest parameter
function sum(...nums) { // more readable than using arguments
    let total = 0;
    for(const num of nums) {
      total += num;
    }
    return total;
}



// Example 2 -->
function average(...numbers) {
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }

    return (sum > 0)? sum/numbers.length : 0;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
