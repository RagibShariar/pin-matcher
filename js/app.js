function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinText = pin + '';
    if (pinText.length > 3) {
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
};

function generatePin(){
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
    // console.log(pin);
};