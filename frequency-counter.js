// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding calue squared in the second array. The frequency of values must be the same

function same(initialArray, squaredValuesGoal) {
	// check if arrays contain only numbers
	const isArr1Num = initialArray.every((val) => !isNaN(val));
	const isArr2Num = squaredValuesGoal.every((val) => !isNaN(val));
	console.log(isArr1Num, isArr2Num);

	if (!isArr1Num || !isArr2Num) {
		console.log('Arrays should contain only numbers');
		return;
	}
	// sort both arrays
	// create variable which hold squares of initial array
	// compare if squaredValuesGoal contains initialArraySquared
	// return true if every initialArray has its square in the squaredValueGoal
}

same([4, 1, 2, 3], [16, 1, 4, 9]);
