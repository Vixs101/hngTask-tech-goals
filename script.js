function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const currentDay = daysOfWeek[date.getDay()];
    const currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('currentTime').textContent = `The time is: ${currentTime}`;
    document.getElementById('currentDay').textContent = `Today is: ${currentDay}`;
    
}

updateDateTime();
setInterval(updateDateTime, 1000);
