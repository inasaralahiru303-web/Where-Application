
function searchWeather() {
    const city = document.getElementById("cityInput").value;

    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }


    const apiKey = "b558d3a3c8a943c5a8c105433261210";
    const baseUrl = "http://api.weatherapi.com/v1";

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.getElementById("wetherInfo").innerHTML =
                `
    <div1>
        
        <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"alt="Weather icon">
        <p1>${data.current.temp_c}°C</p1>
        
    </div>`;

            document.getElementById("wetherInfo1").innerHTML = `
    <div class="small-weather-container">

        <div class="small-box">
            <h3>Humidity</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/12564/12564532.png" alt="" width="30%" higth="30%">

            <p>${data.current.humidity}%</p>
        </div>

        <div class="small-box">
            <h3>Wind Speed</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/3351/3351922.png" alt="" width="30%" higth="30%">

            <p>${data.current.wind_kph} km/h</p>
        </div>

        <div class="small-box">
            <h3>Feels Like</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/10033/10033983.png" alt="" width="30%" higth="30%">
            <p>${data.current.feelslike_c}°C</p>
        </div>

         <div class="small-box">
            <h3>Feels Like</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/10033/10033983.png" alt="" width="30%" higth="30%">
            <p>${data.current.feelslike_c}°C</p>
       

    </div>

     </div>
     <div class="small-box">
        <div class="weatherapi-weather-forecast awe_days_5 awecf" bis_skin_checked="1">
        <div class="weatherapi-weather-forecast-day" bis_skin_checked="1"><div class="weatherapi-weathe-forecast-day-abbr" bis_skin_checked="1">Wed</div><div class="weatherapi-weather-forecast-day-abbr" bis_skin_checked="1"><div class="" bis_skin_checked="1"><img src="//cdn.weatherapi.com/weather/64x64/day/353.png" alt="Light rain shower" title="Light rain shower" loading="lazy" width="64px" height="64px"></div><!-- /.weatherapi-weather-todays-stats --></div><div class="weatherapi-weather-forecast-day-temp" bis_skin_checked="1">27.8<span> °c</span></div></div>
        <div class="weatherapi-weather-forecast-day" bis_skin_checked="1"><div class="weatherapi-weathe-forecast-day-abbr" bis_skin_checked="1">Thu</div><div class="weatherapi-weather-forecast-day-abbr" bis_skin_checked="1"><div class="" bis_skin_checked="1"><img src="//cdn.weatherapi.com/weather/64x64/day/353.png" alt="Light rain shower" title="Light rain shower" loading="lazy" width="64px" height="64px"></div><!-- /.weatherapi-weather-todays-stats --></div><div class="weatherapi-weather-forecast-day-temp" bis_skin_checked="1">27.7<span> °c</span></div></div>
        <div class="weatherapi-weather-forecast-day" bis_skin_checked="1"><div class="weatherapi-weathe-forecast-day-abbr" bis_skin_checked="1">Fri</div><div class="weatherapi-weather-forecast-day-abbr" bis_skin_checked="1"><div class="" bis_skin_checked="1"><img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="Patchy rain nearby" title="Patchy rain nearby" loading="lazy" width="64px" height="64px"></div><!-- /.weatherapi-weather-todays-stats --></div><div class="weatherapi-weather-forecast-day-temp" bis_skin_checked="1">27.8<span> °c</span></div></div>
        <div class="weatherapi-weather-forecast-day" bis_skin_checked="1"><div class="weatherapi-weathe-forecast-day-abbr" bis_skin_checked="1">Sat</div><div class="weatherapi-weather-forecast-day-abbr" bis_skin_checked="1"><div class="" bis_skin_checked="1"><img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="Overcast" title="Overcast" loading="lazy" width="64px" height="64px"></div><!-- /.weatherapi-weather-todays-stats --></div><div class="weatherapi-weather-forecast-day-temp" bis_skin_checked="1">28.1<span> °c</span></div></div>
        <div class="weatherapi-weather-forecast-day" bis_skin_checked="1"><div class="weatherapi-weathe-forecast-day-abbr" bis_skin_checked="1">Sun</div><div class="weatherapi-weather-forecast-day-abbr" bis_skin_checked="1"><div class="" bis_skin_checked="1"><img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="Patchy rain nearby" title="Patchy rain nearby" loading="lazy" width="64px" height="64px"></div><!-- /.weatherapi-weather-todays-stats --></div><div class="weatherapi-weather-forecast-day-temp" bis_skin_checked="1">27.7<span> °c</span></div></div>
    </div>
`;

        });
}
