let nums = [555, 901, 482, 1771];

function findNumber(nums) {
	let count = 0;
	let digit = 0;

	for (let num of nums) {
		while (num > 0) {
			digit++;
			num = parseInt(num / 10);
		}

		if (digit % 2 == 0) count++;
	}
	return count;
}

console.log(findNumber(nums)); // 1
