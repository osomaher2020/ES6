// *** JS is not class-based language ***
// - it uses functions to create objects --> i.e: a class in JS is just a function


// ES5
function Plane(numEngines) { // the constructor function
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all Plane instances
Plane.prototype.startEngines = function () { // inheritance using -> prototype object
    console.log('starting engines...');
    this.enginesActive = true;
};

var richardsPlane = new Plane(1); // the constructor function is --> called with the new keyword && starts with a capital letter
// it sets the data on the objects that will be created --- (1) for numEngines
richardsPlane.startEngines();

var jamesPlane = new Plane(4); // 4 engines
jamesPlane.startEngines();



// ES6 -- classes are just a mirage and hide the fact that prototypal inheritance is actually going on under the hood
class Plane {
    constructor(numEngines) { // Clearly defined constructor function
      this.numEngines = numEngines;
      this.enginesActive = false;
    }

    startEngines() {
      console.log('starting engines…');
      this.enginesActive = true;
    }


    static badWeather(planes) { // static method --> can be called without instantiating the class
        for (plane of planes) {
          plane.enginesActive = false;
        }
    }
}

typeof Plane; // function

// static method call
Plane.badWeather([richardsPlane, jamesPlane]);

// non-static method call
var plane1 = new Plane(2);
plane1.startEngines(); // can be called only using an instance of the class



// ----- super -------- To get from the "subclass" to the parent class --
// parent
class Tree {
    // run once an object is created --> new Tree()
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
      this.size = size;
      this.leaves = leaves;
      this.leafColor = null;
    }

    changeSeason(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
}

// subclass
class Maple extends Tree {  // inheritance
    constructor(syrupQty = 15, size, leaves) {
      super(size, leaves); // super() used as a function --- calls the Parent's constructor()
      this.syrupQty = syrupQty; // *** if you used `this` before `super` it will throw an error ***
    }

    changeSeason(season) {
      super.changeSeason(season); // super() used as an object --- calls the Parent's changeSeason()
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }

    gatherSyrup() {
      this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5); // constructor(syrupQty, size)
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');