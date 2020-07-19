const container = document.querySelector('.container');
const boxNumbers = document.querySelectorAll('#stopwatch .box.number');
const playButton = document.querySelector('#buttons .icon-button.play');
const pauseButton = document.querySelector('#buttons .icon-button.pause');
const resetButton = document.querySelector('#buttons .icon-button.reset');

const boxFormat = [2, 2, 3];
const stopwatch = new Stopwatch();
let intervalID = null;

resetStopwatch();

playButton.addEventListener('click', () => {
	if (intervalID !== null) return;
	startStopwatch();
	container.classList.add('animate-gradient');
});

pauseButton.addEventListener('click', () => {
	stopStopwatch();
	container.classList.remove('animate-gradient');
});

resetButton.addEventListener('click', () => {
	stopStopwatch();
	resetStopwatch();
	container.classList.remove('animate-gradient');
});

function startStopwatch(num = 10) {
	intervalID = setInterval(() => {
		stopwatch.increment(num);
		setBoxNumbers();
	}, num);
}

function stopStopwatch() {
	clearInterval(intervalID);
	intervalID = null;
}

function resetStopwatch() {
	stopwatch.reset();
	setBoxNumbers();
}

function setBoxNumbers() {
	boxNumbers.forEach((box, index) => {
		box.textContent = formatToString(stopwatch.time[index], boxFormat[index]);
	});
}
