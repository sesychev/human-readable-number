module.exports = function toReadable (number) {
	const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
	const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = 'hundred';

	let str = '';

	if (number <= 20) {
		str = numbersFunc (number);
	}

	if (number > 20 && number < 100) {
		str = dozensFunc (number);
	}

	if (number >= 100) {
		str = hundredsFunc (number);
	}

	function numbersFunc (one) {
		for (let index = 0; index < numbers.length; index++) {
			if (one === index) {
				return numbers[index];
			}
		}
	}
	
	function dozensFunc (dozen) {
		let s = '';
		const first = Math.floor (dozen / 10);
		const second = dozen % 10;

		for (let index = 0; index < dozens.length; index++) {
			if (first === index) {
				s = dozens[index];
			}
		}

		return second === 0 ? s : s + ' ' + numbersFunc (second);
	}

	function hundredsFunc (hundred) {
		const third = Math.floor (hundred / 100);
		const fourth = hundred % 100;

		if (fourth === 0) {
			return numbersFunc (third) + ' ' + hundreds;
		}
		else if (fourth <= 20) {
			return numbersFunc (third) + ' ' + hundreds + ' ' + numbersFunc (fourth);
		}
		else {
			return numbersFunc (third) + ' ' + hundreds + ' ' + dozensFunc (fourth);
		}
	}

	return str;
}
