import { KeyboardEvent } from 'react';

export const handleNumberOnly = (e: KeyboardEvent<HTMLInputElement>): void | boolean => {
	const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Tab'];
	const { key } = e;
	if (keys.find((e) => e === key)) return true;
	e.preventDefault();
};

export const findLargestNumber = (arr: number[]) => {
	let largestNum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > largestNum) {
			largestNum = arr[i];
		}
	}

	return largestNum;
};
