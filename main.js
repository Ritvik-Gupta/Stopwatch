const container = document.querySelector('.container');
const boxNumbers = document.querySelectorAll('#stopwatch .box.number');
const playButton = document.querySelector('#buttons .icon-button.play');
const pauseButton = document.querySelector('#buttons .icon-button.pause');
const resetButton = document.querySelector('#buttons .icon-button.reset');

const stopwatch = new Stopwatch();
let intervalID = null;

resetStopwatch();

playButton.addEventListener('click', () => {
	console.log('Clicked on Play Button');
	if (intervalID !== null) return;
	startStopwatch();

	playButton.setAttribute('disabled', 'true');
	pauseButton.removeAttribute('disabled');
	container.classList.add('animate-gradient');
});

pauseButton.addEventListener('click', () => {
	console.log('Clicked on Pause Button');
	stopStopwatch();

	playButton.removeAttribute('disabled');
	pauseButton.setAttribute('disabled', 'true');
	container.classList.remove('animate-gradient');
});

resetButton.addEventListener('click', () => {
	console.log('Clicked on Reset Button');
	stopStopwatch();
	resetStopwatch();

	playButton.removeAttribute('disabled');
	pauseButton.removeAttribute('disabled');
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
	pauseButton.classList.add('disabled');
}

function setBoxNumbers() {
	boxNumbers.forEach((box, index) => {
		box.textContent = formatToString(stopwatch.time[index], 2);
	});
}
