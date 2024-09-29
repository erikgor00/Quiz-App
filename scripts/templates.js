function showEndScreen() {
    // show Endscreen
    document.getElementById('questionBody').style.display = 'none';
    document.getElementById('endScreen').style = '';
    document.getElementById('amountOfAllQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
}

function updateToNextQuestion() {
    // show questions    
    document.getElementById('questionBody').style.display = '';
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current_question').innerHTML = currentQuestion + 1;
    document.getElementById('all_questions').innerHTML = questions.length;
    showPreviousNextButton();
}

function showSelectedQuiz() {
    switch (true) {
        case selectedQuiz == 'HTML':
            question = questions[currentQuestion];
            updateToNextQuestion();
            break;
        case selectedQuiz == 'javascript':
            question = javascriptQuestions[currentQuestion];
            updateToNextQuestion();
            break;
        case selectedQuiz == 'CSS':
            question = CSSQuestions[currentQuestion];
            updateToNextQuestion();
            break;
    }
}

function rightAnswerSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == question['right answer'];
}

function selectRightAnswer(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    audioSuccess.play();
    rightQuestions++;
}

function selectWrongAnswer(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioWrong.volume = 0.2;
        audioWrong.play();
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}