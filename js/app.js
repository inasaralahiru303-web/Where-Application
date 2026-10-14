const apiKey ="b558d3a3c8a943c5a8c105433261210";
const baseUrl="http://api.weatherapi.com/v1";



fetch(`${baseUrl}/current.json?key=${apiKey}&q=Pandura`).then(res => res.json()).then(data =>{
    console.log(data);

    document.getElementById("wetherInfo").innerHTML = 
    `
    <div>
    <h1>${data.current.name}</h1>
    <img src="${data.current.condition.icon}
    <p>${data.current.temp_c}°C</p>
    <p>${data.current.humidity}%</p>
</div>`
});