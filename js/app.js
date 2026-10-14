const apiKey ="b558d3a3c8a943c5a8c105433261210";
const baseUrl="http://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=Galle`).then(res => res.json()).then(data =>{
    console.log(data);

});