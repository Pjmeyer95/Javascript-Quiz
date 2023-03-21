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

