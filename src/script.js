

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



let searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("submit", handleSearchSubmit);
    
    
    searchCity("San Fransisco");








function getForecast(city){

    let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios(apiUrl).then(displayForecast);






}



function displayForecast(response){


let days = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
let forecastHtml = "";


days.forEach(function(day){
    forecastHtml = forecastHtml +
    `
 <div class="col-1" >
        <div class="days">
            ${day}
        </div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt=""
          width="40" />
          <div class="daily-temps">
            <span class="daily-temp-hi">80</span>
            <span class="daily-temp-low">61</span>
          </div>
        </div>

     </div>
    
    </div>`;

});

let forecastElement = document.querySelector("#grid-daily");
forecastElement.innerHTML = forecastHtml;





   
}
displayForecast();

