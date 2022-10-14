// --- Arrow functions ---
// regular
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) {
    return name.toUpperCase();
});
// arrow
const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase() // Notice: return & ; -- was removed
    // called: "concise body syntax" "مختصر"
    // automatically returns the expression
);

// *** .map()
    // -- You pass a function to it, and it calls that function once on every element in the array
    // --  then it gathers the returned values from each function call and makes a new array with those results

// ex2:
const longNames = upperizedNames.filter( name => name.length > 5 );

// *** Regular functions can be either (function declarations) or (function expressions),
// however arrow functions are always ((expressions))

// with 1 parameter
const greet = name => `Hello ${name}!`;
greet("sola");
// Zero parameters
const sayHi = () => console.log('Hello Student!');
const sayHi2 = _=> console.log('Hello Student!'); // is the same as ()
sayHi();
// Multiple parameters
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');



// ----- "block body syntax" -----
// * If you have multiple lines of code in your arrow function's body
const upperizedNames3 = ['Farrin', 'Kagure', 'Asser'].map( name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`; // Notice: return -- is Used
});


// wrong example X X X
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];
const crazyColors = colors.map( color => {
    color.split('').reverse().join('') + '!'; // X X X
    // if you use {} --> you should use -- return
});



// ------- this -------------
// With regular functions, the value of (this) is set based on how the function is called
// With arrow functions, the value of (this) is based on the function's surrounding context === the value of (this) outside the function

// constructor
function IceCream() {
    this.scoops = 0;
    console.log(this);
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
    setTimeout(function() {
        this.scoops++; // (this) -- referes to -> the global object and NOT the dessert object --> a new scoops variable was created (with a default value of undefined)
        console.log('scoop added! '+this.scoops); // this.scoops = undefined+1 = NaN
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops);

// cone = this
IceCream.prototype.addScoop = function() {
    const cone = this; // <<< look
    setTimeout(function() {
        cone.scoops++; // it uses the value of the (this) outside the function
        console.log('scoop added! '+this.scoops); // this.scoops = undefined+1 = NaN
    }, 500);
};

const dessert2 = new IceCream();
dessert2.addScoop();
console.log(dessert2.scoops);

// with arrow function
IceCream.prototype.addScoop = function() {
    setTimeout(() => { // an arrow function is passed to setTimeout
        this.scoops++; // arrow functions inherit their (this) value from the surrounding context
        console.log('scoop added!');
    }, 0.5);
};

const dessert3 = new IceCream();
dessert3.addScoop();
console.log(dessert3.scoops);
