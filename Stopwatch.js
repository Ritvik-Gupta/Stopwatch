const formatToString = (num, len) => {
	let str = num.toString();
	if (len <= str.length) {
		return str.substr(0, len);
	}
	return '0'.repeat(len - str.length) + str;
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

		time(n = 2) {
			return [
				formatToString(minutes, n),
				formatToString(seconds, n),
				formatToString(millis, n),
			];
		}

		timeString(n = 2) {
			return (
				formatToString(minutes, n) +
				' : ' +
				formatToString(seconds, n) +
				' : ' +
				formatToString(millis, n)
			);
		}
	}

	return _Stopwatch_;
})();
