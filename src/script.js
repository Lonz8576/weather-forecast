














function displayForecast(){


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