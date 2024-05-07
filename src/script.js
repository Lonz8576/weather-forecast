


function refreshWeather(response) {
    let temperatureElement = document.querySelector("#main-temp");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
     let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    let conditionElement = document.querySelector("#description");
    

    let iconElement = document.querySelector("#center-icon");
    
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}"center-icon" />`;


  
   cityElement.innerHTML = response.data.city;
   conditionElement.innerHTML = response.data.condition.description;
      temperatureElement.innerHTML = `${response.data.temperature.current} ° F`;
     humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
   windElement.innerHTML = `${response.data.wind.speed}mph`;


    getForecast(response.data.city);

}

function searchCity(city) {
    let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(refreshWeather);


}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
  
   searchCity(searchInput.value);
}



    searchCity("San Fransisco");
    
    






function formatDay(timestamp) {
    let date = new Date(timestamp = 1000);
    let day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    
    return day[date.getDay()];
}

function getForecast(city){

    let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios(apiUrl).then(displayForecast);

}



function displayForecast(response){


let forecastHtml = "";



    
response.data.daily.forEach(function(day, index) {
    if (index < 5) {

    forecastHtml = forecastHtml +
    `
 <div class="col-1" >
        <div class="days">
            ${formatDay(day.time)}
        </div> 
           <img src="${day.condition.icon_url}" class="grid-icon" />
          <div class="daily-temps">
            <span class="daily-temp-hi">${Math.round(day.temperature.maximum)}°</span>
            <span class="daily-temp-low">${Math.round(day.temperature.minimum)}°</span>
          </div>
        </div>
    `;
    }
    });

let forecastElement = document.querySelector("#grid-daily");
forecastElement.innerHTML = forecastHtml;




let searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("submit", handleSearchSubmit);


displayForecast();

}