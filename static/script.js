
function showSubmitButton() {
    var selectBox = document.getElementById("sport");
    var submitButton = document.getElementById("submit-button");
    
    if (selectBox.value !== "") {
        submitButton.style.display = "inline-block";
    } else {
        submitButton.style.display = "none";
    }
}


/*
let questions = [
    {
        question: "Who is the best bedwars player?",
        options: ["Mythie", "The Mythical Pro", "MythicalPro_YT"]
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome"]
    }
];



let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchQuizData();
});

function fetchQuizData() {
    fetch('/static/quiz-data.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            loadQuestion();
        })
        .catch(error => console.error('Error fetching quiz data:', error));
}

function loadQuestion() {
    if (questions.length === 0) {
        console.error('No questions available.');
        return;
    }

    const questionContainer = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(selectedOption) {
    console.log(`Selected answer: ${selectedOption}`);
    // Handle the answer here (e.g., store it, check correctness, etc.)
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        showCompletion();
    } else {
        loadQuestion();
    }
}

function showCompletion() {
    document.getElementById('question-text').innerText = 'Quiz Completed!';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('next-button').style.display = 'none';
}

*/