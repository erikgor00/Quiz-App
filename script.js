let question = '';
let rightQuestions = 0;
let currentQuestion = 0;
let selectedQuiz = '';
let audioSuccess = new Audio('./assets/sounds/correct.mp3');
let audioWrong = new Audio('./assets/sounds/wrong.mp3');

function quizSelection(Selection) {
    selectedQuiz = Selection
    currentQuestion = 0
    rightQuestions = 0
    let x = window.matchMedia("(max-width: 420px");
    if (x.matches) {
        document.getElementById('left').style.display = 'none';
        document.getElementById('startscreen').style.display = 'flex';
        document.getElementById('start_button').style.display = 'block';
    } else {
        document.getElementById('startscreen').style.display = 'flex';
        document.getElementById('start_button').style.display = 'block';
        document.getElementById('questionBody').style.display = 'none';
        document.getElementById('endScreen').style.display = 'none';
    }
    resetAnswerButtons();
}

function startGame() {
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('questionBody').style.display = 'flex';
    showQuestions();
}

function showQuestions() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        showSelectedQuiz();
    }
}

function showPreviousNextButton() {
    if (currentQuestion < 1) {
        document.getElementById('previous_button').classList.add('d-none');
    } else {
        document.getElementById('previous_button').classList.remove('d-none');
    }
}

function answer(selection) {
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right answer']}`;
    if (rightAnswerSelected(selectedQuestionNumber)) {
        selectRightAnswer(selection);
    } else {
        selectWrongAnswer(selection, idOfRightAnswer);
    }
    document.getElementById('next_button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestions();
    document.getElementById('next_button').disabled = true;
    resetAnswerButtons();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function previousQuestion() {
    currentQuestion--;
    showQuestions();
}

function updateProgressBar() {
    let progressText = document.getElementById('progress');
    let allQuestions = questions.length;
    let progress = Math.round((currentQuestion + 1) / allQuestions * 100);
    progressText.innerHTML = '';
    progressText.innerHTML = `${progress} %`;
    document.getElementById('progress').style.width = `${progress}%`;
}

function backToStart() {
    document.getElementById('left').style.display = 'flex';
    document.getElementById('endScreen').style.display = 'none';
}

function restartGame() {
    document.getElementById('questionBody').style.display = '';
    document.getElementById('endScreen').style.display = 'none';
    rightQuestions = 0;
    currentQuestion = 0;
    showQuestions();
}