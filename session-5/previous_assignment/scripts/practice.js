const headerTwo = document.querySelector("h2");
headerTwo.textContent = "Session 4; Day 10";

const identify = document.querySelector("#identify");
const signIn = document.querySelector("#signed_in");


function promptUser() {
    const userName = prompt("What is your name?");
    const message = "Welcome " + userName;
    alert(message);
}
/*
identify.onclick = () => {
    const userName = prompt("Kindly enter your name, please");
    if (!userName){
        alert("It is by force o!!!");
    }
    alert(`You have successfully signed in ${userName}!`);
    signIn.textContent = `You're signed in, ${userName}`
};*/
// identify.addEventListener("click", promptUser);