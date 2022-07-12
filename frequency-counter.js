// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding calue squared in the second array. The frequency of values must be the same

function same(initialArray, squaredValuesGoal) {
	// check if arrays contain only numbers
	const isArr1Num = initialArray.every((val) => !isNaN(val));
	const isArr2Num = squaredValuesGoal.every((val) => !isNaN(val));
	//console.log(isArr1Num, isArr2Num);

	if (!isArr1Num || !isArr2Num) {
		console.log('Arrays should contain only numbers');
		return;
	}
	// // sort both arrays
	// const sortInitialArray = initialArray.sort((a, b) => a - b);
	// const sortSquaredValuesGoalArray = squaredValuesGoal.sort((a, b) => a - b);
	// console.log(sortInitialArray, sortSquaredValuesGoalArray);

	// // create variable which hold squares of initial array
	// const initalArraySquared = initialArray.map((num) => num * num);
	// console.log(initalArraySquared);

	// compare if squaredValuesGoal contains initialArraySquared{
	const squareAvailable = initialArray.every((num) =>
		squaredValuesGoal.includes(num * num)
	);
	// return true if every initialArray has its square in the squaredValueGoal
	console.log(squareAvailable);
	return squareAvailable;
}

same([4, 1, 2, 3], [16, 1, 4, 9]);
same([4, 1, 2, 3, 10], [16, 1, 4, 9]);
same([4, 1, 2, 3, 3], [16, 1, 4, 9]);
