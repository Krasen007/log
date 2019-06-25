var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/money_faucet.jpg') {
        myImage.setAttribute('src', 'images/empty_faucet.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/money_faucet.jpg');
    }
};

var myButton = document.querySelector('button');
var myNewHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myNewHeading.textContent = 'Welcome to your mental palace, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myNewHeading.textContent = 'Your mental palace is open, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}