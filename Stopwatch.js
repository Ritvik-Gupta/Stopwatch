const formatToString = (num, len) => {
	let str = num.toString();
	if (len - str.length > 0) str;
	return new Array(len - str.length).fill(0).join('') + str;
};

const Stopwatch = (() => {
	let minutes = 0;
	let seconds = 0;
	let millis = 0;

	class _Stopwatch_ {
		reset() {
			minutes = 0;
			seconds = 0;
			millis = 0;
		}

		increment(addMillis = 10) {
			millis += addMillis;
			seconds += Math.floor(millis / 1000);
			minutes += Math.floor(seconds / 60);

			millis = millis % 1000;
			seconds = seconds % 60;
		}

		get time() {
			return [minutes, seconds, millis];
		}
	}

	return _Stopwatch_;
})();
