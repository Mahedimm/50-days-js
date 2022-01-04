// Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    const randomNumber = Math.floor(Math.random()*(rangeEnd-rangeStart))

	return rangeStart + randomNumber
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
