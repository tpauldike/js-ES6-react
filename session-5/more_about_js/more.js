//callback, arrow == anonymous // implicit, explicit

/*
((value1, value2) => {
  if (value1 == value2) {
    console.log("They are the same");
  } else {
    console.log("They are different");
  }
})(30, "30");*/

// map(), filter(), reduce(), find(); spread operator, object property shortened, 
//FUNCTIONAL PROGRAMMING vs OBJECT-ORIENTED PROGARMMING

function addNum(x, y) {
  return x + y;
}
console.log(addNum(2, 4));  //object.addNum()

console.log(((x, y) => x + y)(4, 6));
