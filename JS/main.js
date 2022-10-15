
//10-14 - days to rent car
let rentalCostClick = document.querySelector('#rentalConvertSpartan')
rentalCostClick.addEventListener('click', rentalCarCost)
/* document.querySelector('#rentalDaysInput').addEventListener('keydown', (event) => {
    if (event.key === "enter" || event.keyCode === 13) { // key code of the keybord key
        return rentalCarCost()
    }
}); */

function rentalCarCost() {
    let d = document.querySelector('#rentalDaysInput').value
    costOfRental = d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    document.querySelector('#costOfRental').innerText = ""
    document.querySelector('#costOfRental').innerText += `$${costOfRental}`
}

//10-13 - convert name to initial

document.querySelector('#nameConvertSpartan').addEventListener('click', abbrevName)

function abbrevName() {
    let fName = document.querySelector('#nameInput').value
    let nameArray = fName.toUpperCase().split("")
    let firstNameLetter = nameArray[0]
    let lastNameLetter = nameArray[nameArray.indexOf(" ") + 1]
    document.querySelector('#nameConvertResult').innerText = ""
    document.querySelector('#nameConvertResult').innerText += ` ${firstNameLetter}.${lastNameLetter}`
}