const time = document.querySelector('.time');
const thisDay = document.querySelector('.date');
const PartDay = document.querySelector('.greeting');
let names = document.querySelector('.name');
const body = document.querySelector('body');

let slidePrev = document.querySelector('.slide-prev');
let slideNext = document.querySelector('.slide-next');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
let humidity = document.querySelector('.humidity');

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteBtn = document.querySelector('.change-quote');

function showTime() {
    // здесь ваш код
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    setTimeout(showTime, 1000);
    // console.log(date)
    //alert('Привет');
}
showTime();
/*
Утро от 4-5 часов до 11-12.
День от 11-12 часов до 15-16.
Вечер от 15-16 часов до 23-24.
Ночь от 23-24 часов до 4-5.
*/
function showdate() {
    // здесь ваш код
    const date = new Date();
    const options = { month: 'long', day: 'numeric',/* hour: 'numeric', minute: 'numeric',*/ timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('de-De', options);
    thisDay.textContent = currentDate;
    //console.log(currentDate);

    const hours = date.getHours();

    if (hours > 4 && hours <= 12) {
        PartDay.textContent = `Good morning`
    }
    if (hours > 12 && hours <= 16) {
        PartDay.textContent = `Good Day`
    }
    if (hours > 16 && hours <= 24) {
        PartDay.textContent = `Good evening`
        //console.log('evening')
    }
    if (hours > 0 && hours <= 4) {
        PartDay.textContent = `Good night`
        //console.log('night')
    }

    setTimeout(showdate, 1000);
    // console.log(date)
    //alert('Привет');
}
showdate();

function setLocalStorage() {
    localStorage.setItem('name', names.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        names.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

let timeOfDay
let bgNum

function getRandomNum(min, max) {
    //let bgNum = 0
    min = Math.ceil(min);
    max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(bgNum = Math.floor(Math.random() * (max - min + 1)) + min) //Максимум и минимум включаются

}

function setBg() {
    getRandomNum(10, 20)
    //console.log(bgNum)
    const img = new Image();
    //img.url = '../assets/img/' + bgNum + '.jpg';
    body.style.backgroundImage = 'url(./assets/img/' + bgNum + '.jpg)';
}
setBg();
//let randomNum = 0;

function getSlideNext() {
    slideNext.addEventListener('click', () => {
        console.log(bgNum += 1)
        body.style.backgroundImage = 'url(./assets/img/' + bgNum + '.jpg)';
    });
}
getSlideNext()

function getSlidePrev() {
    slidePrev.addEventListener('click', () => {
        console.log(bgNum -= 1)
        body.style.backgroundImage = 'url(./assets/img/' + bgNum + '.jpg)';
    });
}
getSlidePrev()

// Погода
// `https://api.openweathermap.org/data/2.5/weather?q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&lang=ru&appid=4ca848bb82776e391cc1309aca8f5bfd&units=metric`

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=4ca848bb82776e391cc1309aca8f5bfd&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(url)

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Влажность: ${data.main.humidity} %`;

}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

// Данные от JSON-файла

/*
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/

function randomIntFromInterval(num = 20) { // num - количество картинок
    return Math.floor(Math.random() * num + 1);
}

async function getQuotes() {
    let quotes;

    quotes = `./data1.json`;

    const res = await fetch(quotes);
    const data = await res.json();

    let randomQuote = randomIntFromInterval(data.length);
    //console.log(data.length)
    //console.log(randomQuote)

    quote.textContent = data[randomQuote].text;
    author.textContent = data[randomQuote].author;

}

document.addEventListener('DOMContentLoaded', getQuotes);

quoteBtn.addEventListener('click', () => {
    getQuotes();
})

// Player
/*
const playBtn = document.querySelector('.play-btn');
//const pauseBtn = document.querySelector('.pause-btn');
//const button = document.querySelector('.play-btn');
const audio = new Audio();

let randomNum
let isPlay = false;

function playAudio() {
    if (!isPlay) {
        audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        audio.currentTime = 0;
        audio.play();
        isPlay = true
        playBtn.classList.toggle('pause');
    } else if (isPlay) {
        audio.pause();
        isPlay = false
        playBtn.classList.toggle('pause');
    }
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
playBtn.addEventListener('click', toggleBtn);

*/
