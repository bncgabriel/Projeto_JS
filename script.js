function updateTime() {
    const  hoursElement  =  document.getElementById('hours');
    const  minutesElement  =  document.getElementById('minutes');
    const  secondsElement  =  document.getElementById('seconds');
    const  now  = new Date();
    const  hours  =  now.getHours().toString().padStart(2,  '0');
    const  minutes  =  now.getMinutes().toString().padStart(2,  '0');
    const  seconds  =  now.getSeconds().toString().padStart(2,  '0');
    hoursElement.textContent  =  hours;
    minutesElement.textContent  =  minutes;
    secondsElement.textContent  =  seconds;
}
setInterval(updateTime,  1000);
updateTime();