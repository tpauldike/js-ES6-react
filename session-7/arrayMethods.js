//learning to work with map(), filter(), reduce(), find()

const unitDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//an array of objects
const programmer = [
    prog1 = {
        name: "Emeka Paul",
        role: "Frontend Developer",
        salary: 2500,
        married: true,
    },
    prog2 = {
        name: "Gloria Paul-Dike",
        role: "DevOps",
        salary: 2000,
        married: false,
    },
    prog3 = {
        name: "Gold Kid",
        role: "Backend Developer",
        salary: 2000,
        married: true,
    },
    prog4 = {
        name: "Capenter John",
        role: "Frontend Developer",
        salary: 3000,
        married: false,
    },
    prog5 = {
        name: "Ebube Paul-Dike",
        role: "UI/UX",
        salary: 1000,
        married: false,
    },
]
/*
//returning an array even numbers form the array, [unitDigits]
const evenNumbers = [];
for (let i = 0; i < unitDigits.length; i++) {
    if (unitDigits[i] % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

//the structure of a foreach loop, an alternative to forloops
unitDigits.forEach(element => {
    
});

//returning an array even numbers form the array [unitDigits] with a single line of code
console.log((unitDigits.filter(digit => digit % 2 === 0)));
*/


/*
//returning an array of the 'names' of the objects in the array, [programmer]
const programmerName = [];
for (let i = 0; i < programmer.length; i++){
    programmerName.push(programmer[i].name);
}
console.log(programmerName);

//Getting all the 'names' of the objects in [programmer] with just a line of code, using filter()
console.log(programmer.map((worker) => worker.name));
*/

// returning an array of the names of the married programmers
// console.log(programmer.filter(prog => prog.married).map(prog => prog.name));

//Summing up the salaries of the programmers using map() and reduce()
console.log(programmer.map(prog => prog.salary).reduce((sum, next) => sum + next));

//Without the use of map() and reduce(), it would look like this
let sum = 0;
for (let z = 0; z < programmer.length; z++){
    sum += programmer[z].salary
}
console.log(sum);

