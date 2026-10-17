const apiKey ="b558d3a3c8a943c5a8c105433261210";
const baseUrl="http://api.weatherapi.com/v1";



fetch(`${baseUrl}/current.json?key=${apiKey}&q=colom`).then(res => res.json()).then(data =>{
    console.log(data);

    document.getElementById("wetherInfo").innerHTML = 
    `
    <div>
        <h2>${data.location.name}</h2>
        <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"alt="Weather icon">
        <p>${data.current.temp_c}°C</p>
        <p>${data.current.humidity}%</p>
    </div>`
     document.getElementById("wetherInfo1").innerHTML = 
    `
    <div>
        <h2>${data.location.name}</h2>
        <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"alt="Weather icon">
        <p>${data.current.temp_c}°C</p>
        <p>${data.current.humidity}%</p>
    </div>`   
});
