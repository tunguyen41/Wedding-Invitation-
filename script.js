// Countdown Timer
const eventDate = new Date("March 15, 2025 17:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "The event has started!";
        clearInterval(countdownFunction);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `<h3>Countdown to Event: ${days}d ${hours}h ${minutes}m ${seconds}s</h3>`;
}, 1000);
