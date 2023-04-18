const seconds_el = document.querySelector("#seconds")
const minutes_el = document.querySelector("#minutes")
const hours_el = document.querySelector("#hours")
const days_el = document.querySelector("#days")

const register_button = document.querySelector("#register_button")
const register_modal = document.querySelector("#register_modal")

const default_time = {
    days: 8,
    hours: 12,
    minutes: 44,
    seconds: 28
}

let interval = setInterval(() => {
    default_time.seconds--;

    //seconds
    if (default_time.seconds < 0)
    {
        default_time.seconds = 59
        default_time.minutes--;
    }

    //minutes
    if (default_time.minutes < 0)
    {
        default_time.minutes = 59
        default_time.hours--;
    }

    //hours
    if (default_time.hours < 0)
    {
        default_time.hours = 23
        default_time.days--;
    }

    //days
    if (default_time.days <= 0)
    {
        clearInterval(interval);
    }

    const seconds_formated = default_time.seconds < 10 ? '0' + default_time.seconds : default_time.seconds;
    const minutes_formated = default_time.minutes < 10 ? '0' + default_time.minutes : default_time.minutes;
    const hours_formated = default_time.hours < 10 ? '0' + default_time.hours : default_time.hours;
    const days_formated = default_time.days < 10 ? '0' + default_time.days : default_time.days;

    seconds_el.innerText = seconds_formated;
    minutes_el.innerText = minutes_formated;
    hours_el.innerText = hours_formated;
    days_el.innerText = days_formated;
}, 1000);

register_button.onclick = () => {
    register_modal.classList.add("open")
}