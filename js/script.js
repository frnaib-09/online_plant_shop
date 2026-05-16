let yourName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submitbtn = document.querySelector('.submitbtn');

function checkInput() {

    let isValid = true;

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Name validation
    if (yourName.value === '') {
        document.getElementById('nameError').innerText = '* Name is required';
        isValid = false;
    } else if (yourName.value.length < 3) {
        document.getElementById('nameError').innerText = '* Name must be at least 3 characters';
        isValid = false;
    }

    // Email validation
    if (email.value === '') {
        document.getElementById('emailError').innerText = '* Email is required';
        isValid = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('emailError').innerText = '* Enter a valid email';
        isValid = false;
    }

    // Message validation
    if (message.value === '') {
        document.getElementById('messageError').innerText = '* Message is required';
        isValid = false;
    } else if (message.value.length < 20) {
        document.getElementById('messageError').innerText = '* Message must be at least 20 characters';
        isValid = false;
    }

    return isValid;
}

submitbtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (!checkInput()) {
        alert('Please fill out the form correctly');
    } else {
        alert('Form Submitted Successfully');
    }
});

function updateClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, dateOptions);
    const timeStr = now.toLocaleTimeString();
    document.getElementById('live-clock').innerHTML = `${dateStr} | ${timeStr}`;
}

updateClock(); 
setInterval(updateClock, 1000);
