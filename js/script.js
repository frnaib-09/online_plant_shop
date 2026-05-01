let submitbtn = document.querySelector('.submitbtn');

function funcAlert (){
    alert('Your query has been submitted');
}

submitbtn.addEventListener('click', funcAlert);

function updateClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, dateOptions);
    const timeStr = now.toLocaleTimeString();
    document.getElementById('live-clock').innerHTML = `${dateStr} | ${timeStr}`;
}

updateClock(); 
setInterval(updateClock, 1000);
