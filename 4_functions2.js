// --------- Default function parameters ----------
function greet(name = 'Student', greeting = 'Welcome') { // Es6
    return `${greeting} ${name}!`;
}

greet();
greet('James');
greet('Richard', 'Howdy');


// ------ Defaults & destructuring arrays ----------
function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid

// X X X
createGrid(); // Uncaught TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
// --- expects an array to be passed in that it will then destructure
// solution ->
function createGrid([width = 5, height = 5] = []) { // = [] as the default value
    return `Generates a ${width} x ${height} grid`;
}
createGrid(); // now it will Work!



// ----------- Defaults & destructuring objects ----------
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

// X X X
createSundae(); // Uncaught TypeError: Cannot match against 'undefined' or 'null'.
// solution -> function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {})      // = {} as the default value

// ** One benefit of (object defaults) over (array defaults) is how they handle [[ skipped options ]]
// no need to reserve skipped items with undefined --> createGrid([undefined, 3]);
// with object defaults --> createSundae({toppings: ['Cookie Dough']});

// ****** Since arrays are positionally based
// we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.