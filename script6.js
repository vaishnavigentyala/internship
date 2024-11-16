const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Berlin", "Delhi", "Paris", "Rome"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What has a face and two hands, but no arms or legs?",
        answers: ["Bed", "Chair", "Clock", "Table"],
        correct: 2
    },
    {
        question: "What has a thumb and four fingers but is not a hand?",
        answers: ["Monkey", "Toy", "Clock", "Glove"],
        correct: 3
    },
    {
        question: "How many continents are there on Earth?",
        answers: ["Seven", "Ten", "Eight", "Five"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question;
    
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, index) => {
        button.textContent = questionObj.answers[index];
    });

    document.getElementById('next-btn').style.display = 'none';  
}

function selectAnswer(index) {
    const questionObj = questions[currentQuestionIndex];
    
    
    if (index === questionObj.correct) {
        score++;
    }

    document.getElementById('score').textContent = score;
    document.getElementById('next-btn').style.display = 'inline-block'; 
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('You have completed the quiz!');
        currentQuestionIndex = 0;  
        score = 0;
        document.getElementById('score').textContent = score;
        loadQuestion();
    }
}

loadQuestion();
