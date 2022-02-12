function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + '';
    if (pinText.length > 3) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
    // console.log(pin);
};



document.getElementById('keypad-body').addEventListener('click', function (event) {
    const number = event.target.innerText;


    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        // get the input field

        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;

        // set the numbers into input field
        calcInput.value = newNumber;
    }

});

//verifying pin
function verifyPin() {
    const successMessage = document.getElementById('success-msg');
    const errorMessage = document.getElementById('error-msg');

    const pin = document.getElementById('pin-display').value;
    const calcInput = document.getElementById('typed-numbers').value;



    if (pin == calcInput) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    }
    else {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }
}