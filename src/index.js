module.exports = function toReadable (number) {
	const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
	const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = 'hundred';

	let str = '';
	if (number <= 20) {
		for (let index = 0; index < numbers.length; index++) {
			if (number === index) {
				str = numbers[index];
			}
		}
	}

	return str;
}
