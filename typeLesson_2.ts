//UNION TYPES
//number1. 
type IDType = number | string;
const showID = (id: IDType) => {
    console.log(`Your ID is: ${id}`);
}
showID(12345);
showID("abcde12345");


//number2
type Fruit = "apple" | "banana" | "orange";
const eatFruit = (fruit: Fruit) =>{
    console.log(`You ate an ${fruit}`);
}
eatFruit("apple");
eatFruit("orange");


//number3
type Result = true | false;
const printResult = (result: Result) => {
if (result === true){
    console.log("Pass")
}else{
    console.log("Fail")
}
}
printResult(true)
printResult(false)


//Interface. numb1

interface Book {
    title: string;
    pages: number;
}

const describeBook = (book: Book) =>{
console.log (`The book ${book.title} has ${book.pages} pages`)
}
describeBook({
    title: "Harry portar",
    pages: 189

});


//Create two interfaces: num2

interface Teacher {
    name: string,
    subject: string
}

interface Employee {
    id: number,
    email: string
}

type School = Teacher & Employee;

const printTeacherInfo = (school: School) => {
    console.log(`id: ${school.id} Name: ${school.name} subject:${school.subject} email:${school.email}`)
}
printTeacherInfo({
    name:"Sundsgården",
    subject:"backendcourse",
    id: 1,
    email:"debby@gmail.com"
});


//Exercise 3: 
interface Car {
    name: string;
    brand: string;
    year: number;
}

const printCar = (car: Car) => {
    console.log(`Brand:${car.brand}  Name:${car.name} Year:${car.year}`)
}
printCar({
    name: "Volvo",
    brand: "XC90",
    year: 2000
});



//Enums
//Exercise 1: 
enum Color{
    Red,
    Green,
    Blue,
}
const showColor = (color:Color) => {
console.log(`You chose ${Color[color]}`)
}
showColor(Color.Red)
showColor(Color.Green)
showColor(Color.Blue)


//Exercise 2: 
enum PizzaSize {
    Small,
    Medium,
    Large,
}
const orderPizza = (size:PizzaSize) => {
    console.log(`You ordered a ${PizzaSize[size]}`)
}
orderPizza(PizzaSize.Small)
orderPizza(PizzaSize.Medium)
orderPizza(PizzaSize.Large)


//Exercise3. 
enum Role {
    Admin,
    User,
    Guest,
}
const printRole = (role:Role) => {
    if(role === Role.Admin){
        console.log("You have full access")
    }else if (role === Role.User){
        console.log("You have limited access")
    }else if (role === Role.Guest){
        console.log("You have guest access")
    }
}
printRole(Role.Admin)
printRole(Role.User)
printRole(Role.Guest)




//Generics
//Exercise 1: 

const wrapInArray =<T> (item:T) : [T] => {
return[item]
}
console.log(wrapInArray("cat"))
console.log(wrapInArray("1234"))

//Exercise 2: 
const firstItem = <T> (arr: T[]) : T | undefined =>{
return arr[0];
};
console.log(firstItem([1,2,3]))
console.log(firstItem(["a", "b", "c"]))


// Exercise 3: 
const swap = <T> (a: T, b: T) : T[] => {
return [b,a];
};
console.log(swap("hello", "world")); 





