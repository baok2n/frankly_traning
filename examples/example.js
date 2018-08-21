console.log("-----------------------------------------------");
// Default param examples:

function f(x, y=0) {
	console.log(`default param: ${x}, ${y}`);
}

f(5, );
f(y=undefined);

console.log("-----------------------------------------------");
// Multi-line String in ES6

console.log(`multiline string:\nline1\nline2`);
console.log(`multiline string:
line1
line2`);

console.log("-----------------------------------------------");
// Destructuring Assignment in ES6

// Default value
let [a, b] = [1, 2];
console.log(`a=${a} b=${b}`);

// Swapping values
[a, b] = [b, a];
console.log(`swapping value: a=${a} b=${b}`);

[a, , b] = [1, 2, 3];
console.log(`a=${a} b=${b}`);

[a, ...b] = [1, 2, 3];
console.log(`a=${a} b=${b}`);

// Assign new variable name and default value:
var {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa);

let key = "z";
let {[key]: foo} = {z: 'bar'};
console.log(foo);

console.log("-----------------------------------------------");
// Enhanced Object Literals

// Variable put in square brackets will be computed to its value:
var name = "make";
var i = 0;
const laptop = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "HP"
}

console.log(laptop.make1);//"Apple"
console.log(laptop.make2);//"Dell"
console.log(laptop.make3);//"HP"

console.log("-----------------------------------------------");
// Block-Scoped Constructs Let and Const + Classes in ES6 + Arrow Function
class myClass {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    printResult() {
        console.log(this.first + this.second);
    }

    static staticMethod(){
        console.log("This is a static method");
    }

    demo() {
        var varVariable = 1;
        let letVariable = 2;

        if (true) {
            var varVariable = 11;
            let letVariable = 22;
        }

        console.log(`varVariable=${varVariable}, letVariable=${letVariable}`);        
    }
}

let anObject = new myClass(2, 3);
anObject.printResult();
myClass.staticMethod();
anObject.demo();

console.log("-----------------------------------------------");
// Promises

function askForCar (luck) {
    return new Promise((resolve, reject) => {
        if (true) {
            // resolve("Yay a car");
            console.log("Yay a car");
        } else {
            reject("no car ... FeelsBadMan");
        }
    });
}

// var truePromise = askForCar(true);
setTimeout(askForCar, 2000);
console.log("Statement placed ater askForCar promise call");

// truePromise.then(() => {
//     console.log("Go out with girls")
// }).then(() => {
//     console.log("Go to hotel");
// }).then(() => {
//     console.log("Dont know what's gonna happen");
// }).catch((err) => {
//     console.log(err);
// });

console.log("-----------------------------------------------");

var resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
};

var resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
};

var concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
}

var stillSerial = function () {
    console.log('==CONCURRENT START with Promise.all==');
    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });
}

concurrentStart();

console.log("-----------------------------------------------");