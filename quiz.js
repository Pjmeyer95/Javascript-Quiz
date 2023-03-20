const quizForm = document.getElementById("quiz-form");
const scoreDiv = document.getElementById("score");
const highScoresList = document.getElementById("high-scores");
const correctAnswers = ["b", "a", "a"];
// WHEN I click the start button- To do
let questionindex=0
let quesstions=[
	{
		// key:"value"
		question: "What is the correct syntax for creating a new JavaScript variable?",
		answers: ["var = myVariable", "var myVariable", "myVariable = var"],
		rightAnswer: "var myVariable"
	}
]

let interval
let timer = 30
function startTimer(){
	interval = setInterval(() => {
		document.getElementById("timer").textContent=timer
		if (timer >0) {
			timer--
		} else {
			clearInterval(interval)
		}
	}, 1000);
}
function startgame(event){
	event.preventDefault()
	console.log(event.target)
	startTimer()
}
document.getElementById("startgame").addEventListener("click",startgame)

quizForm.addEventListener("submit", (event) => {
	event.preventDefault();

	let score = 0;
	const userAnswers = [
		quizForm.q1.value,
		quizForm.q2.value,
		quizForm.q3.value,
	];

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 1;
		}
	});

	scoreDiv.innerHTML = `You scored ${score} out of ${correctAnswers.length}.`;

	saveScore(score);
	showHighScores();
});

function saveScore(score) {
	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
	const newScore = {
		score: score,
		date: new Date().toLocaleDateString(),
	};

	highScores.push(newScore);
	highScores.sort((a, b) => b.score - a.score);
	highScores.splice(5);

	localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showHighScores() {
	return JSON.parse(localStorage.getItem("highScores"))}

/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */
{/* <h2>Question 1:</h2>
<p>What is the correct syntax for creating a new JavaScript variable?</p>
<input type="radio" name="q1" value="a"> var = myVariable;
<br>
<input type="radio" name="q1" value="b"> var myVariable;
<br>
<input type="radio" name="q1" value="c"> myVariable = var;
<br>
<br>
<h2>Question 2:</h2>
<p>What is the output of the following code?</p>
<p>console.log(typeof "hello");</p>
<input type="radio" name="q2" value="a"> "string"
<br>
<input type="radio" name="q2" value="b"> "number"
<br>
<input type="radio" name="q2" value="c"> "boolean"
<br>
<br>
<h2>Question 3:</h2>
<p>What is the correct syntax for a JavaScript if statement?</p>
<input type="radio" name="q3" value="a"> if (condition) {code to be executed}
<br>
<input type="radio" name="q3" value="b"> if {code to be executed} (condition)
<br>
<input type="radio" name="q3" value="c"> if [condition] then {code to be executed}
<br>
<br>
<input type="submit" value="Submit Quiz" */}