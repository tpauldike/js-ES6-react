//map(), filter(), find(), reduce()

const TeamReact = [
    member1 = {
        firstName: "Topman",
        surName: "Paul-Dike",
        married: false,
        noOfChildren: 0,
        fromALX: true,
    },
    member2 = {
        firstName: "Karlie",
        surName: "Moyo",
        married: true,
        noOfChildren: 3,
        fromALX: true,
    },
    member3 = {
        firstName: "Gold",
        surName: "Kid",
        married: true,
        noOfChildren: 5,
        fromALX: true,
    },
    member4 = {
        firstName: "John",
        surName: "Carpenter",
        married: false,
        noOfChildren: 1,
        fromALX: false,
    },
    member5 = {
        firstName: "John",
        surName: "Matthew",
        married: true,
        noOfChildren: 10,
        fromALX: false,
    },
    member6 = {
        firstName: "John",
        surName: "Abass",
        married: false,
        noOfChildren: 0,
        fromALX: true,
    }
  ];

//   console.log(member1.firstName);
//   console.log(TeamReact[0].surName);
/*
newArray = [];
  for (let i = 0; i < TeamReact.length; i++){
    if (TeamReact[i].married){
        newArray.push(TeamReact[i].firstName);
    }
  }
  console.log(newArray);

  array.forEach(element => {
    
  });
  */

// console.log(TeamReact);
// console.log(TeamReact.filter(goat => goat.married).map(member => member.firstName));

// console.log(TeamReact.find(name => name.firstName === "John"));

console.log(TeamReact.reduce((sum, nextMember) => sum + nextMember.noOfChildren, 0));