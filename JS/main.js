//prevent default page reload on click
document.querySelector('button').addEventListener('click', function handleClick(event) {
    event.preventDefault();
});


// ------------------            10-18 sort nums        ------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//enter key eventListener
document.querySelector('#addNumsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        return addNums();
    }
});
let arrX = [];
let numInput = document.querySelector('#addNumsHere')

//ARRAY TO BE SORTED, CREATED FROM NUMBERS ENTERED INTO INPUT
document.querySelector('#addNumsButton').addEventListener('click', addNums)
function addNums() {
    let newNum = numInput.value;
    if (isNaN(newNum) || newNum === '') {
        numInput.value = 'please enter a number'
    } else { //this is where the numbers are added to the array (arrX)
        arrX.push(` ${newNum}`)
        document.querySelector('#unsortedNumsGoHere').innerText = arrX;
        numInput.value = ""; //clearinput
    }
}

//SORT ARRAY AND DISPLAY
let sortedNums = 0;
document.querySelector('#sortNumsButton').addEventListener('click', () => {
    sortedNums = arrX.sort((a, b) => a - b)
    console.log(sortedNums)
    document.querySelector('#sortedNumsGoHere').innerText = sortedNums
});

// CLEAR INPUTS WITH CLEAR BUTTON 
document.querySelector('#clearNums').addEventListener('click', () => {
    document.querySelector('#unsortedNumsGoHere').innerText = ""
    document.querySelector('#sortedNumsGoHere').innerText = ""
});




//10-// ------------------            10-14 days to rent car        ------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
let rentalCostClick = document.querySelector('#rentalConvertSpartan')
rentalCostClick.addEventListener('click', rentalCarCost)

//When the keypress event occurs, the event object will contain the data of which key is pressed. The code of the pressed key will be present in keyCode or the which property of the event object.
document.querySelector('#rentalDaysInput').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return rentalCarCost();
    }
});

function rentalCarCost() {

    let d = document.querySelector('#rentalDaysInput').value
    costOfRental = d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    document.querySelector('#costOfRental').innerText = ""
    document.querySelector('#costOfRental').innerText += `$${costOfRental}`
}

// ------------------            10-13 convert name to initials       ------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

document.querySelector('#nameConvertSpartan').addEventListener('click', abbrevName)
document.querySelector('#nameInput').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return abbrevName();
    }
});

function abbrevName() {
    let fName = document.querySelector('#nameInput').value
    let nameArray = fName.toUpperCase().split("")
    let firstNameLetter = nameArray[0]
    let lastNameLetter = nameArray[nameArray.indexOf(" ") + 1]
    document.querySelector('#nameConvertResult').innerText = ""
    document.querySelector('#nameConvertResult').innerText += ` ${firstNameLetter}.${lastNameLetter}`
}

//--------------- ^^^^^^^^^^^  beginning of daily entries ^^^^^^^^^^^^^^ -----------

document.querySelector('#fa-play').addEventListener('click', caretDown)

function caretDown() {
    document.querySelector('#fa-caret-down').classList.add('.fa-caret-down')
}




















//do function on 'enter' key hit

/* When the keypress event occurs, the event object will contain the data of which
key is pressed. The code of the pressed key will be present in keyCode or the which
property of the event object. */
/* document.querySelector('#addNumsHere').addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    //So, we check if the pressed keycode is equal to the Enter key code (13)
    if (keyCode === 13) {
        // call click function on Enter
        return addNums();
    }
}); */







//event listeners for dropdown

/* 
const buttons = document.querySelectorAll('.listItem')

Array.from(buttons).forEach(element => element.addEventListener('click', displayBlock))

function displayBlock() {
    document.querySelector('.dropdown-content').classList.toggle('dropdownDisplayJS')

} */

/* var buttons = document.querySelectorAll('.listItem');

for (var i = 0; i < buttons.length; i++) {
    var self = buttons[i];

    self.addEventListener('click', function (event) {
        // prevent browser's default action
        event.preventDefault();

        // call your awesome function here
        displayBlock(this); // 'this' refers to the current button on for loop
    }, false);
}
function displayBlock() {
    document.querySelector('.dropdown-content').classList.toggle('dropdownDisplayJS')
} */
