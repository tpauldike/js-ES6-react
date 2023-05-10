/*
B - Bracket
O - Of
D - Division
M - Multiplication
A - Addition
S - Subtraction
*/
// console.log((((5 + 2) - 1) + 3) * 2);
//let num1 = 12;
//let num2 = 10;
// ()=>
/*
function add2num(num1, num2){
    console.log(num1 + num2);
}

add2num(10, 20);
add2num(5, 2);
add2num(1, 3);
*/

//TASK 1: print all odd numbers from 1 - 20 [even number]

function printOddNum(max){
    for (let u = 0; u <= max; u++){
        if (u % 2 === 0){
            continue;
        } else{
            console.log(u);
        }
    }
}

//printOddNum(5);

let mylist = ['Topman', 23, 12.0, 'a'];
let sublist = [1, 2, 3];


mylist[3] = sublist;
let newlist = mylist.pop(); // remove the last element
console.log(mylist);
console.log(mylist[3][2]);


// console.log(sublist[2]);