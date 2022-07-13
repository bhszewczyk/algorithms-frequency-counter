// time complexity o(n^2)

function same(arr1, arr2) {
	// if one of the arrays is off in length - false
	if (arr1.length !== arr2.length) {
		return false;
	}
	// for each num from arr1 check if there is a square in arr2 (if an index is found)
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		// if index not found - false
		if (correctIndex === -1) {
			return false;
		}
		// if index found - remove that number from arr2 and keep looking for next one
		arr2.splice(correctIndex, 1);
	}
	// if both arrays have the same length and each num from arr1 has corresponding swuare in arr2 with proper frequency return true
	return true;
}

console.log(same([2, 1, 2, 3], [9, 4, 1, 4, 12]));
console.log(same([2, 1, 2, 3], [9, 4, 1, 4]));

// time complexity o(n)
function same2(arr1, arr2) {
	// if one of the arrays is off in length - false
	if (arr1.length !== arr2.length) {
		return false;
	}

	// initialize frequencyCounters
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	// create object where num is a key and has corresponding frequency as value
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	// loop through the keys in obj frequencyCounter1
	for (let key in frequencyCounter1) {
		// check if obj frequencyCounter2 has key which is a square of key from frequencyCounter1
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}

		// check if the frequency of key from obj frequencyCounter1 is the same for corresponding key square in frequencyCounter2
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same2([2, 1, 2, 3], [9, 4, 1, 4, 12]));
console.log(same2([2, 1, 2, 3], [9, 4, 1, 4]));
console.log(same2([2, 1, 2, 5, 3], [9, 4, 1, 4]));
