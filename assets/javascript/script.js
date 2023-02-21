
let citySearchEl = $('#search_city');
let searchBtn = $('#search');
let currentweatherEl = $('#currentWeather');
let forecastweatherEl = $('#forecastWeather');


function searchweatherdata(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2a4c87c91239171e373aaacf60a3dff`
    // let parentDiv = $('div');
    let parentDiv = document.createElement('div')

    fetch(url).then(response => response.json()).then(data => {
        console.log(data)

        let cityNameEl = document.createElement('p')
        cityNameEl.innerHTML = data.name + (new Date());
        let temperatureDiv = document.createElement('div');
        temperatureDiv.append(data.main.temp)
        let humidityDiv = document.createElement('div');
        humidityDiv.append(data.main.humidity)
        let windspeedDiv = document.createElement('div');
        windspeedDiv.append(data.wind.speed)

        console.log(parentDiv)

        parentDiv.append(cityNameEl, temperatureDiv, humidityDiv, windspeedDiv)
        currentweatherEl.append(parentDiv)
        parentDiv.style.border = '1px solid black'
        parentDiv.style.margin = '10px'
        parentDiv.style.padding = '15px'

        searchforcachedData(data.name)
    })
}



function searchforcachedData(city){
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a2a4c87c91239171e373aaacf60a3dff`

    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        let forecastParent = document.createElement('div')
        forecastParent.style.display = "flex"

        let dataList = data.list
         for(i = 0; i < dataList.length; i+=8) {
        let parentDiv = document.createElement('div')
        parentDiv.style.border = '1px solid black'
        parentDiv.style.margin = '10px'
        parentDiv.style.padding = '15px'
        parentDiv.style.backgroundColor = 'black'
        parentDiv.style.color = 'white'
        parentDiv.style.width = '200px'
    

        let temperatureDiv = document.createElement('div');
        temperatureDiv.append(dataList[i].main.temp)
        let dateTextDiv = document.createElement('div');
        dateTextDiv.append(dataList[i].dt_txt)
        let humidityDiv = document.createElement('div');
        humidityDiv.append(dataList[i].main.humidity)
        let windspeedDiv = document.createElement('div');
        windspeedDiv.append(dataList[i].wind.speed)

        parentDiv.append(dateTextDiv, temperatureDiv, humidityDiv, windspeedDiv)
        forecastParent.append(parentDiv)
    
    }
    forecastweatherEl.append(forecastParent)
    })

}

function init(e) {
    e.preventDefault();
    let cityName = citySearchEl.val()
    searchweatherdata(cityName)
}

searchBtn.click(init)




// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city

// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city

// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history

// THEN I am again presented with current and future conditions for that city