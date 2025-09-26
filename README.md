# 🎮 Quiz Game (Mini JavaScript Lab)

This project is a **JavaScript practice mini-lab** designed to strengthen my understanding of **objects**, **arrays**, and **functions** in JavaScript.  
It simulates a simple **quiz game** where a computer randomly picks a question and also makes a random guess from the given choices.  

👉 If the computer gets it right ✅, we celebrate. Otherwise ❌, the correct answer is revealed.  

---

## ✨ Features
- 📂 **Array of Objects** → Each question is stored as an object with `category`, `question`, `choices`, and `answer`.  
- 🎲 **Random Question Selection** → A function selects a random question from the array.  
- 🤖 **Computer Random Guess** → The computer randomly selects one of the available choices.  
- ✅❌ **Result Check** → The guess is checked against the correct answer and logged to the console.  

---

## 🛠️ File Structure
```bash
quiz-game/
├── .gitignore # Ignore node_modules or unnecessary files if added
├── README.md # Project documentation (this file)
└── source.js # Main JavaScript source file
```

---

## 📜 Code Explanation

### 1. Questions Array 📝
Each item in the `questions` array is an object with:
- `category`: The field of the question (e.g., "Science").
- `question`: The actual quiz question.
- `choices`: An array of possible answers.
- `answer`: The correct answer (must also appear in `choices`).

Example:
```js
questions[0] = {
    category: "Geography",
    question: "What is the capital city of Canada?",
    choices: ["Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
};
```

### 2. Random Utility Function 🎲
General-purpose function to get a random item from any array:
```js
const getRandomItem = (anArray) => {
    let n = anArray.length;
    let randomIndex = Math.floor(Math.random() * n);
    return anArray[randomIndex];
};
```

### 3. Core Game Functions 🕹️
`getRandomQuestion()` → Picks a random question from the questions array.

`getRandomComputerChoice()` → Picks a random choice for that question.

`getResults()` → Compares computer’s choice with the correct answer.

#### Example:
```js
const getResults = (questionObject, computerChoice) => {
    console.log(`Question: ${questionObject.question}`);
    console.log(`Computer's choice: ${computerChoice}`);
    if (questionObject.answer === computerChoice) 
        return "The computer's choice is correct!";
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
};
```

## 🚀 How to Run
1. Clone the repo:
```bash
git clone github.com/karianjahi/quiz-game
cd quiz-game
```
2. Run the script in `Node.js`:
```bash
node source.js
```

3. Observe the random question, the computer’s random choice, and the result logged in your terminal.

## 🎯 Learning Objectives Achieved
- ✅ Practiced object creation and array management in JavaScript.

- ✅ Learned how to write utility functions for reusability.

- ✅ Understood how to combine randomness with logic checking.

- ✅ Improved skills in console-based debugging and logging.

## 💡 Future Enhancements
- 🖥️ Add a user interface (browser-based quiz with buttons).

- ⏱️ Introduce timers for answering questions.

- 🏆 Track scores across multiple rounds.

- 👥 Allow player vs. computer mode.

## 🧑‍💻 Author
Dr.rer.nat Joseph Karianjahi Njeri
🚀 Passionate about learning and teaching programming through small, focused projects.


