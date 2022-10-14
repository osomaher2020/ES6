// (let & const) vs var --> eliminate this specific issue of hoisting because they’re scoped to the block, not to the function
//  --- the variable is stuck in what is known as [the temporal dead zone]

// ** hoisting: moving the variable declaration to the top of the function

// (let) -> can be reassigned & can’t be redeclared in the same scope.
// (const) -> can’t be reassigned & can’t be redeclared in the same scope & must be assigned an initial value.


const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
};

const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
}

// ----- template literals == (template strings) == (string interpolation) -------
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
// As an alternative to using the string concatenation operator ( + ) && String's concat()

// ** template literals -- also preserve newlines as part of the string
let note = `${teacher.name} ,

  Please excuse ${student.name}
  He is recovering from the flu.


  Thank you,
  ${student.guardian}`;


// destructuring -> extract data from arrays and objects into distinct variables
// --- Array ---
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
// You can also ignore values when destructuring arrays
// ex1
const [x1, , z1] = point;
// ex2
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
// --- Object ---
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};
let {type, color, carat} = gemstone;
console.log(type, color, carat);
// You can also specify the values you want to select
// let {color} = gemstone;




// >>> challenge <<<
const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getArea2: function(rad) {
      return Math.PI * rad * rad;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
};

let {radius, getArea, getArea2, getCircumference} = circle;

console.log(getArea()); // When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to [this] in the circle object{} which results in an area = NaN
console.log(getArea2(5));