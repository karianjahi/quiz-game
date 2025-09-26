/*
Objectives of this mini-lab
1. Create an array named questions.
2. The questions array contain objects, each having the keys category, question, choices, and answer.
3. The category key has the value of a string representing a question category.
4. The question key has a value of a string representing a question.
5. The choices key has the value of an array containing four strings, which are alternative answers to the question.
6. The answer key has the value of a string, representing the correct answer to the question. Also, the value of answer is included in the choices array.
7. There's a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
8. There's a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
9. There's a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function returns `The computer's choice is correct!` if the answer is correct. Otherwise, it returns `The computer's choice is wrong`. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
*/

 // an questions array
 let questions = [];

//formulating questions
questions[0] = {
    category: "Geography",
    question: "What is the capital city of Canada?",
    // choices: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
    choices: ["Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
};

questions[1] = {
    category: "Science",
    question: "Which planet is known as the Red Planet?",
    // choices: ["Venus", "Mars", "Jupiter", "Mercury"],
    choices: ["Venus", "Mars", "Mercury"],
    answer: "Mars",    
};

questions[2] = {
    category: "History",
    question: "Who was the first president of the United States?",
    // choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington",    
};

questions[3] = {
    category: "Sports",
    question: "How many players are there on a standard soccer team on the field?",
    // choices: [9, 10, 11, 12],
    choices: ["9", "10", "11"],
    answer: "11",    
};

questions[4] = {
    category: "Technology",
    question: "What does HTTP stand for in web addresses?",
    // choices: ["HyperText Transfer Protocol", "High Transfer Text Process", "Hyperlink Transfer Program", "Host Transfer Technology Protocol"],
    choices: ["HyperText Transfer Protocol", "Hyperlink Transfer Program", "Host Transfer Technology Protocol"],
    answer: "HyperText Transfer Protocol",    
};

questions[5] = {
    category: "Literature",
    question: "Who wrote the play Romeo and Juliet?",
    // choices: ["Charles Dickens", "William Shakespear", "Leo Tolstoy", "Mark Twain"],
    choices: ["Charles Dickens", "William Shakespear", "Mark Twain"],
    answer: "William Shakespear",    
};

questions[6] = {
    category: "Mathematics",
    question: "What is the square root of 144?",
    // choices: [10, 11, 12, 14],
    choices: ["10", "12", "14"],
    answer: "12",    
};

questions[7] = {
    category: "Music",
    question: "Which musical instrument has 88 keys?",
    // choices: ["Violin", "Piano", "Guitar", "Flute"],
    choices: ["Violin", "Piano", "Guitar"],
    answer: "Piano",    
};

questions[8] = {
    category: "Chemistry",
    question: "During the electrolyis of acidified water, which gas is produced at the cathode?",
    // choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    choices: ["Oxygen", "Hydrogen", "Carbon dioxide"],
    answer: "Hydrogen",    
};

questions[9] = {
    category: "Chemistry",
    question: "How many moleculres are there in 1 mole of water?",
    // choices: ["6.02 x 10^23", "3.01 x 10^23", "1.00 x 10^24", "2.00 x 10^22"],
    choices: ["6.02 x 10^23", "3.01 x 10^23", "2.00 x 10^22"],
    answer: "6.02 x 10^23",    
};

questions[10] = {
    category: "Physics",
    question: "In the photoelectric effect, electrons are emitted from a metal surface when:",
    // choices: ["The Temperature of the metal is very high", "The metal is placed in a strong magnetic field", "Light of sufficient frequency shines on the metal", "The metal is under high pressure"],
    choices: ["The Temperature of the metal is very high", "The metal is placed in a strong magnetic field", "Light of sufficient frequency shines on the metal"],
    answer: "Light of sufficient frequency shines on the metal",    
};

questions[11] = {
    category: "Physics",
    question: "Which type of radiation has the highest penetrating power?",
    // choices: ["Alpha particles", "Beta particles", "Gamma rays", "Neutrons"],
    choices: ["Alpha particles", "Beta particles", "Gamma rays"],
    answer: "Gamma rays",    
};

// We can now log the questions array to the screen
// console.log(questions);

// Create a general function that takes in an array of items and returns a random item
const getRandomItem = (anArray) => {
    // length of array
    let n = anArray.length;

    // get random index
    let randomIndex = Math.floor(Math.random() * n);

    // Return an item based on the random index

    return anArray[randomIndex];
}

// We need to create a function that picks a random question form the questions array
const getRandomQuestion = (questionArray) => {
    return getRandomItem(questionArray);
};

// console.log(getRandomQuestion(questions));

// Create a function that returns a random choice
const getRandomComputerChoice = (choicesArray) => {
    return getRandomItem(choicesArray);
};

// Create a function called getResults that compares computer's answer to the actual answer.
const getResults = (questionObject, computerChoice) => {
    console.log(`Question: ${questionObject.question}`);
    console.log(`Computer's choice: ${computerChoice}`);
    if (questionObject.answer === computerChoice) return "The computer's choice is correct!"
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
};

// logs to screen
let questionObject = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(questionObject.choices);
const results = getResults(questionObject, computerChoice);
console.log(results);
