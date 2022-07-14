// Given two strings write a function to determine if the second string is an anagram of the first.

function checkIfAnagram(str1, str2) {
	// make arrays from strings, make letters a lower case
	const arr1 = [...str1.toLowerCase()];
	const arr2 = [...str2.toLowerCase()];

	// check if strings have the same chara number
	if (arr1.length !== arr2.length) {
		return false;
	}

	// create empty objects for letters frequency
	let letters1 = {};
	let letters2 = {};

	// add letter keys and frequencies to the object
	for (let letter in arr1) {
		letters1[arr1[letter]] = ++letters1[arr1[letter]] || 1;
	}

	for (let letter in arr2) {
		letters2[arr2[letter]] = ++letters2[arr2[letter]] || 1;
	}

	// fir each key check if there is a match in a key and frequency in other object
	for (let key in letters1) {
		if (letters2[key] !== letters1[key]) {
			return false;
		}
	}

	// if all above fulfulled - it is an anagram
	return true;
}

console.log(checkIfAnagram('listen', 'silent'));
console.log(checkIfAnagram('sister', 'tesis'));
console.log(checkIfAnagram('from', 'forms'));
console.log(checkIfAnagram('Cinema', 'Iceman'));
