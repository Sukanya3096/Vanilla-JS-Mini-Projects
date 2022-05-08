const quizData = [
    {
        question: "What is the most used programming language in 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of India?",
        a: "Shri Narendra Modi",
        b: "Shri Ram Nath Kovind",
        c: "Shri Pranab Mukherjee",
        d: "Smt Pratibha Devisingh Patil",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborghini",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]

let currentQuestion = 0;
let score = 0;
const quiz = document.querySelector(".quiz-container");
const answers = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question = document.getElementById("question");
const submitBtn = document.getElementById("submit");

loadQuestion();

function loadQuestion() {
    deselectAnswers();
    let currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answers.forEach(ans => {
        if (ans.checked) {
            answer = ans.id;
        }
    })
    return answer;
}

function deselectAnswers() {
    answers.forEach(ans => ans.checked = false);
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    quiz.classList.toggle("dark-mode-container")
    question.classList.toggle("header-question");
  }

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
     if(answer) {
         if (answer == quizData[currentQuestion].correct) {
            score++;
         }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions!</h2>
            <button onclick="location.reload()">Reload</button>`
        }
     }

})