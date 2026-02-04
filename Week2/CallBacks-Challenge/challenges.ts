// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */
function addTwo(num: number): number {
    return num + 2;
}
console.log(addTwo(3));  
console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2

//Create a function addS that accepts one input and adds an "s" to it.

function addS(word: string): string {
  return word + "s";
}
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array
 (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
function map(arr: number[], callback: (num: number) => number): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]!));
  }
  return result;
}
console.log(map([1, 2, 3], addTwo));



// ________________________________________________________________________________________________
// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback
 on each element of the array. 
forEach does not return anything.
*/
let alphabet = "";
const letters = ["a", "b", "c", "d"];
function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]!);
  }
}
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);
// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, 
use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/
//console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]

// ________________________________________________________________________________________________

function mapWith(arr: number[], callback: (num: number) => number): number[] {
  const result: number[] = [];

  forEach(arr, function (item) {
    result.push(callback(item));
  });

  return result;
}
console.log(mapWith([1, 2, 3], addTwo));



// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

const nums = [4, 1, 3];
const add = function (a: number, b: number) {
  return a + b;
};

function reduce(arr: number[], callback: (acc: number, curr: number) =>
   number, initialValue: number): number {
  let accumulator = initialValue;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]!);
  }
  return accumulator;
}
console.log(reduce(nums, add, 0));// 8


// ________________________________________________________________________________________________
// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with 
elements found in all of the inputs. BONUS: Use reduce!
 */

function intersection(arrays: any[][]): any[] {
  return arrays.reduce((acc, curr) => {
    return acc.filter(item => curr.includes(item));
  });
}

console.log(
  intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]])
);
//should log: [5, 15]*/




 //Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that
 contains all elements. If there are duplicate elements, only add it once to the new array.
  Preserve the order of the elements starting from the first element of the first input array.
   BONUS: Use reduce!
*/

function union<T>(arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => {
    curr.forEach(item => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
    });
    return acc;
  }, []);
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// ________________________________________________________________________________________________
// Challenge 9
/* 
Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array using 
the callback to see if the output matches the corresponding element (by index) of the second array. 
If there is a match, the element from the first array becomes a key in an object,
 and the element from the second array becomes the corresponding value.
*/
function objOfMatches(
  arr1: string[],
  arr2: string[],
  callback: (item: string) => string
): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  for (let i = 0; i < arr1.length; i++) {
    const key = arr1[i];
    const transformed = callback(key!);
    const value = arr2[i];

    if (transformed === value) {
      result[key!] = value;
    }
  }

  return result;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);

// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// ________________________________________________________________________________________________
// Challenge 10
/* 
Construct a function multiMap that will accept two arrays:
 an array of values and an array of callbacks. 
multiMap will return an object whose keys match the elements in the array of values. 
The corresponding values that are assigned to the keys will 
be arrays consisting of outputs from the array of callbacks,
 where the input to each callback is the key.
*/



function multiMap<T, R>(
  values: T[],
  callbacks: Array<(item: T) => R>
): Record<string, R[]> {
  const result: Record<string, R[]> = {};

  for (let i = 0; i < values.length; i++) {
    const key = String(values[i]);
    result[key] = [];

    for (let j = 0; j < callbacks.length; j++) {
      const output = callbacks[j]!(values[i]!); // <-- FIXED
      result[key].push(output);
    }
  }

  return result;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str: string) {
        return str.toUpperCase();
      },
      function (str: string) {
        return str[0]!.toUpperCase() + str.slice(1).toLowerCase();// <-- FIXED!
      },
      function (str: string) {
        return str + str;
      },
    ]
  )
);


// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }*/






// Challenge 11
/* 
Construct a function objectFilter that accepts an object as the first parameter and a callback 
function as the second parameter. 
objectFilter will return a new object. 
The new object will contain only the properties from the input object such that the property's
 value is equal to the property's key passed into the callback.
*/

function objectFilter(
  obj: { [key: string]: string },
  callback: (key: string) => string
): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  for (const key in obj) {
    const value = obj[key];
    if (callback(key) === value) {
      result[key] = value;
    }
  }

  return result;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

console.log(objectFilter(cities, (city) => city.toUpperCase()));
// { London: 'LONDON', Paris: 'PARIS' }

// Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
/* Create a function majority that accepts an array and a callback. 
The callback will return either true or false. majority will iterate through the array and perform the 
callback on each element until it can be determined if the majority of the return values from the callback are true. 
If the number of true returns is equal to the number of false returns, majority should return false.
 */

function majority<T>(arr: T[], callback: (item: T) => boolean): boolean {
  let trueCount = 0;
  let falseCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]!)) {
      trueCount++;
    } else {
      falseCount++;
    }
    
  }
  return trueCount > falseCount;
}

const isOdd = function (num: number): boolean {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// should log: true

console.log(majority([2, 3, 4, 5], isOdd)); 
// should log: false*/


//// Challenge 13
/* Create a function prioritize that accepts an array and a callback.
 The callback will return either true or false. prioritize will iterate through the array and perform
  the callback on each element, and return a new array, where all the elements that yielded a return value 
  of true come first in the array, and the rest of the elements come second. */

function prioritize<T>(arr: T[], callback: (item: T) => boolean): T[] {
  const trueArr: T[] = [];
  const falseArr: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]!)) {
      trueArr.push(arr[i]!);
    } else {
      falseArr.push(arr[i]!);
    }
  }

  return [...trueArr, ...falseArr];
}

const startsWithS = function (str: string) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);

// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];



//// Challenge 14
/* 
Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.
*/

function countBy<T>(arr: T[], callback: (item: T) => string): { [key : string]: number} {
  const result: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const key = callback(arr[i]!);
    if (result[key] !== undefined) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
  return result;
}

console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }


//// Challenge 15
/* 
Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements 
that resulted in that return value when passed into the callback.
*/

function groupBy<T>(arr: T[], callback: (items: T) => string | number): { [key : string]: T[]} {
  const result: { [key: string]: T[] } = {};

  for (let i = 0; i < arr.length; i++) {
    const key = callback(arr[i]!);
    if (result[key] !== undefined) {
      result[key].push(arr[i]!);
    } else {
      result[key] = [arr[i]!];
    }
  }
  return result;
}

const decimals = [1.3, 2.1, 2.4];
const floored = function (num: number): number {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored));

// should log: { 1: [1.3], 2: [2.1, 2.4] }





//Challenge 16
/* 
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. 
goodKeys will iterate through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys whose associated values
 yielded a true return value from the callback.
*/

function goodKeys(obj: { [key: string]: any}, callback: (value: any) => boolean): string[] {
  const result: string[] = [];
  for (const key in obj) {
    if ( callback(obj[key]) ) {
      result.push(key);
    }
  }
  return result;
}

const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str: string): boolean {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird));

// should log: ['charlie', 'dee']




//// Challenge 17
/* 
Create a function commutative that accepts two callbacks and a value. 
commutative will return a boolean indicating if the passing the value into the first function, 
and then passing the resulting output into the second function, 
yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, 
and then passing the output into the first function).
*/
function commutative<T>(func1: (item: T) => T, func2: (item: T) => T, value: T): boolean {
  const result1 = func2(func1(value));
  const result2 = func1(func2(value));
  return result1 === result2;
}

const multBy3 = (n: number) => n * 3;
const divBy4 = (n: number) => n / 4;
const subtract5 = (n: number) => n - 5;
console.log(commutative(multBy3, divBy4, 11));
// should log: true

console.log(commutative(multBy3, subtract5, 10));
// should log: false

console.log(commutative(divBy4, subtract5, 48));
// should log: false





//Challenge 18
/* 
Create a function objFilter that accepts an object and a callback. 
objFilter should make a new object, and then iterate through the passed-in object, 
using each key as input for the callback. If the output from the callback is equal to the corresponding value, 
then that key-value pair is copied into the new object. objFilter will return this new object.
*/



function objFilter(
  obj: { [key: string]: number },
  callback: (key: number) => number
): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (const key in obj) {
    const numericKey = Number(key); // convert string → number
    if (callback(numericKey) === obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
}

const startingObj: { [key: string]: number } = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;

const half = (n: number) => n / 2;

console.log(objFilter(startingObj, half));

// should log: { 2: 1, 6: 3 }





// Challenge 19
/* 
Create a function rating that accepts an array (of functions) and a value. 
All the functions in the array will return true or false. 
rating should return the percentage of functions from the array that return true when the value is used as input.
*/

function rating<T>(func: Array< (item: T) => boolean>, value: T): number {
  let trueCount = 0;
  for (let i = 0; i < func.length; i++) {
    if (func[i]!(value)) {
      trueCount++;
    }
  }
  return (trueCount / func.length) * 100;
}

const isEven = (n: number) => n % 2 === 0;
const greaterThanFour = (n: number) => n > 4;
const isSquare = (n: number) => Math.sqrt(n) % 1 === 0;
const hasSix = (n: number) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64));
// should log: 100

console.log(rating(checks, 66)); 
// should log: 75





// Challenge 20
/* 
Create a function pipe that accepts an array (of functions) and a value. 
pipe should input the value into the first function in the array, 
and then use the output from that function as input for the second function, 
and then use the output from that function as input for the third function, 
and so forth, until we have an output from the last function in the array. 
pipe should return the final output.
*/

function pipe<T>(funcs: Array<(item: T) => T>, value: T): T {
  let result = value;
  for (const func of funcs) {
    result = func(result);
  }
  return result;
}

const capitalize = (str: string) => str.toUpperCase();
const addLowerCase = (str: string) => str + str.toLowerCase();
const repeat = (str: string) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat"));

// should log: 'CATcatCATcat'




// Challenge 21
/* 
Create a function highestFunc that accepts an object (which will contain functions) 
and a subject (which is any value). highestFunc should return the key of the object 
whose associated value (which will be a function) returns the largest number, 
when the subject is given as input.
*/

function highestFunc<T>(obj: { [key: string]: (item: T) => number },subject: T): string {
  let highestKey = "";
  let highestValue = -Infinity;

  for (const key in obj) {
    const fn = obj[key]!;          // tell TS this exists
    const value = fn(subject);
    if (value > highestValue) {
      highestValue = value;
      highestKey = key;
    }
  }

  return highestKey;
}


const groupOfFuncs: { [key: string]: (n: number) => number } = {};
groupOfFuncs.double = (n: number) => n * 2;
groupOfFuncs.addTen = (n: number) => n + 10;
groupOfFuncs.inverse = (n: number) => n * -1;
console.log(highestFunc(groupOfFuncs, 5));
// should log: 'addTen'

console.log(highestFunc(groupOfFuncs, 11));
// should log: 'double'

console.log(highestFunc(groupOfFuncs, -20));
// should log: 'inverse'



//// Challenge 22
/* 
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. 
combineOperations should pass the starting value into the first function in the array. 
combineOperations should pass the value returned by the first function into the second function, 
and so on until every function in the array has been called. combineOperations should return the final value 
returned by the last function in the array.
*/

function combineOperations<T>(start: T, funcs: Array<(value: T) => T>): T{
  let result = start;
  for (const func of funcs) {
    result = func(result);
  }
  return result;
}


function add100(num: number) {
  return num + 100;
}

function divByFive(num: number) {
  return num / 5;
}

function multiplyByThree(num: number) {
  return num * 3;
}

function multiplyFive(num: number) {
  return num * 5;
}

function addTen(num: number) {
  return num + 10;
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]));
// Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]));
// Should output 10






// Challenge 23
/* 
Define a function myFunc that takes an array and a callback.
myFunc should pass each element from the array (in order) into the callback. 
If the callback returns true, myFunc should return the index of the current element. 
If the callback never returns true, myFunc should return -1;
*/

function myFunc<T>(arr: T[], callback: (items: T) => boolean): number {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]!)) {
      return i;
    }
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOddAgain(num: number): boolean {
  return num % 2 !== 0;
}

console.log(myFunc(numbers, isOddAgain));
// Output should be 1
console.log(myFunc(evens, isOddAgain));
// Output should be -1


// Challenge 24
/* Write a function myForEach that accepts an array and a callback function. 
Your function should pass each element of the array (in order) into the callback function. 
The behavior of this function should mirror the functionality of the native .forEach() 
JavaScript array method as closely as possible.
 */

function myForEach<T>(arr: T[], callbacks: (items: T) => void): void {
  for ( let i = 0; i < arr.length; i++) {
    callbacks(arr[i]!);
  }
}

let sum = 0;

function addToSum(num: number) {
  sum += num;
}

const nums2 = [1, 2, 3];
myForEach(nums2, addToSum);
console.log(sum);
// Should output 6
















