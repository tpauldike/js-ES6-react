	// Starting the quiz by asking the user's name
alert("Welcome to the Quiz!");
user = prompt("Ready for the quiz? Let's know your name: ");

    // Questions will be asked
    const Questions = [{
            id: 0,
            q: "Who is the founder of CodeTrybe?",
            a: [{ text: "Abiodun Shittu", isCorrect: false },
                { text: "Topman Paul-Dike", isCorrect: true },
                { text: "Ebube Anyanwu", isCorrect: false },
                { text: "Naheemah Bello", isCorrect: false }
            ]
        
        },
        {
            id: 1,
            q: "When is CodeTrybe PLD?",
            a: [{ text: "Weekends", isCorrect: false, isSelected: false },
                { text: "Work days", isCorrect: false },
                { text: "ALX peer learning days", isCorrect: false },
                { text: "Daily or very often", isCorrect: true }
            ]
        
        },
        {
            id: 2,
            q: "Who is the 'lion' that checks for plagiarism in ALX SWE?",
            a: [{ text: "Julien Barbier", isCorrect: false },
                { text: "AI", isCorrect: false },
                { text: "Kimba", isCorrect: true },
                { text: "ChatGPT", isCorrect: false }
            ]
        
        },
        {
            id:3,
            q: "How many months does the ALX SWE program lasts for?",
            a: [{ text: "12 months", isCorrect: false },
                { text: "13 months", isCorrect: true },
                { text: "9 months foundation", isCorrect: false },
                { text: "3 months specialization", isCorrect: false },
            ]
        },
        {
            id:4,
            q: "Which of the following is the necessary requirement for the ALX SWE program?",
            a: [{ text: "Bachelor's degree in computer", isCorrect: false },
                { text: "A good android phone and a mentor", isCorrect: false },
                { text: "PC, access to good network and enough internet data", isCorrect: true },
                { text: "YouTube tutorials", isCorrect: false },
            ]
        },
        {
            id:5,
            q: "What is Topman's best food?",
            a: [{ text: "Garri and soup", isCorrect: false },
                { text: "Rice and beans", isCorrect: false },
                { text: "All food, as long as it is edible", isCorrect: false },
                { text: "Anything hygienic, nutritious and tasty", isCorrect: true },
            ]
        },
        {
            id:6,
            q: "What is React.js?",
            a: [{ text: "Programming language for frontend development", isCorrect: false },
                { text: "Language written in C", isCorrect: false },
                { text: "C Static library", isCorrect: false },
                { text: "JavaScript framework", isCorrect: true },
            ]
        },
        {
            id:7,
            q: "What does ES6 stand for?",
            a: [{ text: "Esteem Solitude 6", isCorrect: false },
                { text: "Evaluation Standard 6", isCorrect: false },
                { text: "EcmaScript 6", isCorrect: true },
                { text: "Evolution Storm 6", isCorrect: false },
            ]
        },
    
    ]
    
    // Set start
    var start = true;
    
    // Iterate
    function iterate(id) {
    
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    
    // Getting the question
    const question = document.getElementById("question");
    
    
    // Setting the question text
    question.innerText = Questions[id].q;
    
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    
    
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    
    var selected = "";
    
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
    
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
    
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
    
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
    
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
    }
    
    if (start) {
    iterate("0");
    }
    
    // Next button and method
    const next = document.getElementsByClassName('next')[0];
    var id = 0;
    
    next.addEventListener("click", () => {
    start = false;
    if (id < 7) {
        id++;
        iterate(id);
        console.log(id);
    }
    
    })   
