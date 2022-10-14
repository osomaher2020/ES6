// ------------ Symbols ----------------
// used to identify object properties
const sym1 = Symbol('apple'); // 'apple' is an optional string as its description
console.log(sym1);

// ** description can’t be used to access the symbol itself
// - if you compare two symbols with the same description
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3); // false


// ex:
const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.15 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl); // Object {apple: Object, banana: Object, orange: Object} --> 'banana' is overwritten !!!

// solution -->
const bowl2 = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl2);
// Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
// ** each property is a (unique Symbol) and the first 'banana' doesn’t get overwritten by the second 'banana'





// ---------- iterator protocol -------
// - is used to define a standard way that an object produces a sequence of values
// - process for defining how an object will iterate
// ** An object becomes an iterator when it implements the .next()
        // --- next() -- returns an object with two properties:
        // {
        //     value: the next value in the sequence of values,
        //     done:  is the iterator is done going through the sequence of values = true/false
        // }
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next()); // {value: 0, done: false}
console.log(arrayIterator.next()); // {value: 1, done: false}
console.log(arrayIterator.next()); // {value: 2, done: false}



// --------------- Sets -----------------
// - a collection of unique values
// - items can be either primitive values || objects
// {1, 6, 4, 2} => is a set = all values are unique

// ** Sets are not indexed-based - you do not refer to items in a set based on their position in the set
// ** items in a Set can’t be accessed individually

const games = new Set(); // with no items

const games2 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']); // from a list of values (Array)
// *** games2 -> automatically removes the duplicate entry "Super Mario Bros." when the Set is created

games2.add('Super Mario'); // returns --> the Set object
games2.delete('Mario Kart'); // returns --> boolean true/false
games2.clear(); // removes all items from the Set --> Set {}

console.log(games2.size); // number of items in a Set
console.log(games2.has('Super Mario')); // boolean true/false
console.log(games2.values()); // returns -> SetIterator object

// ----- looping through a Set --------
// ** Sets are built-in iterables
// 1.  use the Set’s default iterator
const iterator = games2.values();
iterator.next(); // {value: 'Super Mario Bros.', done: false} --> can de .next() until -> done: true
// 2.  for...of
for (const game of games2) {
    console.log(game);
}



// -------------- WeakSet ---------------------
// - only contain objects
// - can’t be looped over
// - does not have a .clear()
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

// roster.add('Amanda'); --> adding non-Object --> Uncaught TypeError: Invalid value used in weak set(…)

// *** why using? WeakSet ? ***
// * - to prevent memory leaks
// ** Garbage Collection: process of freeing up memory after some values is no longer needed --> exclusively working with objects
student3 = null;
console.log(roster); // WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}




// ---------- Maps -----------
// - If Sets are similar to Arrays, then Maps are similar to Objects
// - store key-value pairs
// *** both the (keys and the values) can be -->  objects || primitive values || a combination of the two
const employees = new Map();
console.log(employees); // Map {}

// .set(key, value)
// --- Note: *** .set(existedKey, newValue) --> overwrites the old value
employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
// .delete(key)
employees.delete('james.parkes@udacity.com');
// .clear()
employees.clear();
// .has(key)
console.log(members.has('Marcus'));
// .get(key)
console.log(members.get('Evelyn'));

// --- Looping Through Maps --
// 1. use the Map’s default iterator
let iteratorObjForKeys = members.keys(); // .keys() --> access the Map’s keys
// .values() --> access the Map’s values
iteratorObjForKeys.next();
// 2. for...of
for (const member of members) { // member is the (((value))) of each key-value pair
    console.log(member);
}
// 3. forEach()
members.forEach((value, key) => console.log(key, value));


// --- WeakMap ------
