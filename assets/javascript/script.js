
let citySearchEl = $('#search_city');
let searchBtn = $('#search');
let currentweatherEl = $('#currentWeather');
let forecastweaterEl = $('#forecastWeather');


function searchweatherdata(city) {
    console.log(data)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2a4c87c91239171e373aaacf60a3dff`
    let parentDiv = $('div');


    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        let cityNameEl = document.createElement('p')
        cityNameEl.innerHTML = data.name;
        let temperatureDiv = $('div');
        temperatureDiv.html(data.main.temp)
        let humidityDiv = $('div');
        humidityDiv.html(data.main.humidity)
        let windspeedDiv = $('div');
        windspeedDiv.html(data.wind.speed)

        parentDiv.appendchild(cityNameEl, temperatureDiv, humidityDiv, windspeedDiv)
        currentweatherEl.appendchild(parentDiv)
    })
}

function searchforcachedData(city){
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a2a4c87c91239171e373aaacf60a3dff`

    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
    })



}



function init(e) {
    e.preventDefault();
    let cityName = citySearchEl.val()
    searchweatherdata(cityName)
}

searchBtn.click(init)