const handSec = document.querySelector('.hand-sec');
const handMin = document.querySelector('.hand-min');
const handHour = document.querySelector('.hand-hour');

let timeId = setTimeout(function setClock() {
    const currentTime = new Date();
    const s = 6 * currentTime.getSeconds();
    const m = 6 * currentTime.getMinutes();
    const h = 30 * currentTime.getHours() + 0.5 * currentTime.getMinutes();

    handSec.style.transform = `rotate(${s}deg)`;
    handMin.style.transform = `rotate(${m}deg)`;
    handHour.style.transform = `rotate(${h}deg)`;

    timeId = setTimeout(setClock, 1000);
}, 1000)
