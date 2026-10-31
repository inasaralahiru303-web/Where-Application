
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
    
       
        <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"alt="Weather icon">        <p1>${data.current.temp_c}°C</p1>

        

        <div class="small-box">
        <div class="small-box1">
            <img src="https://cdn-icons-gif.flaticon.com/11201/11201832.gif" alt="" width="30%" higth="30%">

        <h3>${data.location.region}</h3>
        <h3>${data.location.country}</h3>
        <br>
        <h3>${data.location.lat}</h3>
        <h3>${data.location.lon}</h3>
        </div>
        </div>
         
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
            <h3>Heat index</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/3380/3380306.png" alt="" width="30%" higth="30%">
            <p>${data.current.heatindex_c}°C</p>
        </div>
        
        <div class="small-box">
            <h3>Feels Like</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/10033/10033983.png" alt="" width="30%" higth="30%">
            <p>${data.current.feelslike_c}°C</p>
        </div>
        
     </div>
     
`;

        });
}
