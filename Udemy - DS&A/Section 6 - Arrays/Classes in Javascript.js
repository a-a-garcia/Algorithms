// 3 things we'll be talking about in this section
// reference type
// context
// instantiation


// REFERENCE TYPE
// * [] === [] // false
// creating two separate arrays in memory, so they are not equal to each other.

// * [1] === [1] // false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// what happens if you do object 1 === object 2?
// true! because object 2 is pointing to the same object in memory as object 1.

//however, if you do object 1 === object 3?
// false! because object 3 is pointing to a different object in memory.

//what happens if you do object1.value = 15, console.log(object2), and console.log(object3)?
// object2.value will be 15, and object3.value will be 10.
// why? because object2 is pointing to the same object in memory as object1, so when you change the value of object1, you are changing the value of the object that object2 is pointing to.

// a reference type is a non-primitive type that is not defined by the programming language, but rather by the programmer.

// you can think of creating a reference type as creating a separate box in memory, and then pointing to that box with a variable.

// again, object 1 and object 2 have the same address in memory, so they are pointing to the same object (or box), whereas object 3 has it's own different address in memory, so it is pointing to a different object.







// CONTEXT
// scope is created when you see curly brackets.

// as soon as you instantiate a function, scope is created. the items inside of the function are only accessible inside of the function.

// what about context?
// context tells you where we are within the object.

//if you do console.log(this)...
// you will get the "window" object.

// 'this' just refers to whatever object it is inside of.

//let's consider how we can change the value of this from the window object to something else.
function a() {
    console.log(this) 
}

const object4 = {
    a: function() {
        console.log(this)
    }
}

object4.a()

// now 'this' refers to the object4 object.








// INSTANTIATION
// instantiation is when you make a copy of an object and reuse the code.

//how do we do it in Javascript?

// first, let's create a class.

class Player {
    constructor(name, type) {
        console.log('players', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
    }
}

//constructor is a function that is called when you create a new instance of a class.

//when you create a Player class, the constructor basically says "whenever you create a new player, I want you to create a name and a type for that player."

// any Player will be able to introduce themselves. and have a name and a type.

// now let's create a Wizard class that inherits from the Player class.

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`)
    }
}

// what's it saying? I want Wizard to have all the same properties and methods as Player.

// super is basically saying "run the constructor function of the Player class." Which allows us to access to the name and type properties of the Player class that its extending.

//now we're able to say...

const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shaun', 'Dark Magic');

// let's follow the flow of data...

//on creation of wizard1...
// 1. the constructor function of the Wizard class is called, because of the new keyword.
// 2. the constructor function of the Wizard class calls the constructor function of the Player class, because of the super keyword.
// 3. the constructor function of the Player class creates the name and type properties of the wizard1 object.

// ' this' is run, and 'this' becomes attached to the wizard1 object.
// now we can say
wizard1.play() // WEEEEEEE I'm a Healer
//but we also have access to 
wizard1.introduce() // Hi, I am Shelly, I'm a Healer
//same things are available for wizard2.

//note: if we try to add a console.log (`wizard`,this) in the wizard class, before super, we'll get an error, because 'this' is not available until after super is called. super is what creates 'this'.


//A note on classical inheritance..
// classical inheritance is when you create a blueprint of an object, and then you create instances of that blueprint.
