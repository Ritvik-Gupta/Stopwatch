const container = document.querySelector('.container');
const boxNumbers = document.querySelectorAll('.box.number');

const playButton = document.querySelector('.icon-button.play');
const pauseButton = document.querySelector('.icon-button.pause');
const resetButton = document.querySelector('.icon-button.reset');

const deleteButton = document.querySelector('.lap-button');
const heading = document.querySelector('.header .heading');
const content = document.querySelector('.content');

const stopwatch = new Stopwatch();
let intervalID = null;
let lapCounter = 0;

resetStopwatch();
resetLaps();

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

	const para = document.createElement('p');
	para.classList.add('item');
	para.textContent = stopwatch.timeString();
	content.appendChild(para);

	heading.textContent = `Laps Recorded : ${++lapCounter}`;
});

resetButton.addEventListener('click', () => {
	console.log('Clicked on Reset Button');
	stopStopwatch();
	resetStopwatch();

	playButton.removeAttribute('disabled');
	pauseButton.removeAttribute('disabled');
	container.classList.remove('animate-gradient');
});

deleteButton.addEventListener('click', resetLaps);

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
	pauseButton.setAttribute('disabled', 'true');
}

function resetLaps() {
	content.innerHTML = '';
	heading.textContent = 'No Laps Recorded';
	lapCounter = 0;
}

function setBoxNumbers() {
	stopwatch.time().forEach((unit, index) => (boxNumbers[index].textContent = unit));
}
