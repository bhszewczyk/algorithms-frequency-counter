// Given two strings write a function to determine if the second string is an anagram of the first.

function checkIfAnagram(str1, str2) {
	const arr1 = [...str1];
	const arr2 = [...str2];

	let letters1 = {};
	let letters2 = {};

	for (letter in arr1) {
		// console.log(arr1[letter]);
		letters1[arr1[letter]] = ++letters1[arr1[letter]] || 1;
	}

	for (letter in arr2) {
		letters2[arr2[letter]] = ++letters2[arr2[letter]] || 1;
	}

	for (let key in letters1) {
		console.log(key);
		if (!(key in letters2)) {
			return false;
		}

		if (letters2[key] !== letters1[key]) {
			return false;
		}
	}

	return true;
}

console.log(checkIfAnagram('hallo', 'aollh'));
