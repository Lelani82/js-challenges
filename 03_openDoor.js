/*
Open Door

You will only open the door if Simon is there with coffee.

The openDoor function should return true if 
at least one person at the door has the name Simon,
and hasCoffee is true. Otherwise return false.

Does your solution work when only one person is at the door? 
What if no one is there?

Beast mode: make it work when multiple people come to the door

Test your solution:
npm test

(requires jest: npm i -g jest)
*/

function openDoor(input) {
	for (let i = 0; i < input.length; i++) {							// iterate through input array
		if (input[i].name === "Simon" && input[i].hasCoffee == true) {	//check if both conditions are true
			return true;												//then returns true
		}
	}
	return false;														// else returns false
}

// openDoor = (item) => {
// 		if (item.name === "Simon" && item.hasCoffee = true)
// 		return true;
// } else {
// return false;
// }

module.exports = {
	openDoor
}