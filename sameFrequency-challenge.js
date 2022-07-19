// Write a function called sameFrequency. Given two positive integers find out if the two numbers have the same frequency of digits.
// Your solution MUST have complexity O(n)

function sameFrequency(num1, num2) {
	// create arrays from integers
	const num1Arr = [...String(num1)];
	const num2Arr = [...String(num2)];

	// if number of digits is not the samereturn false
	if (num1Arr.length !== num2Arr.length) {
		return false;
	}

	// create temp empty obj for reference from num1Arr
	const num1referenceObj = {};

	// inser numbers as keys to the temp array and count frequency
	for (let i = 0; i < num1Arr.length; i++) {
		let keyNum = num1Arr[i];

		num1referenceObj[keyNum]
			? (num1referenceObj[keyNum] += 1)
			: (num1referenceObj[keyNum] = 1);
	}

	// compare num2Arr to the reference obj
	for (let i = 0; i < num2Arr.length; i++) {
		// define number for comparison
		let num = num2Arr[i];

		// if num does not have corresponsing with this num key return false
		// if the corresponsing key exists subtract 1 from the frequency and repeat
		if (!num1referenceObj[num]) {
			return false;
		} else {
			num1referenceObj[num] -= 1;
		}
	}

	// if above fulfuled return true
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
