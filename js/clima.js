// Variables
// Varuables
let Latitud;
let Longitud;

// Función Principal
function WeatherAPI() {

    // Se inicia la Request
    let request = new XMLHttpRequest();

    request.onload = function (resp) {
        console.log(resp.target.response);
        console.log(JSON.parse(resp.target.response));
        
        let data = JSON.parse(resp.target.response);
        console.log(data.name);
        console.log(data.main.temp);
        
        let TempElement = document.getElementById("Temperatura");
        TempElement.innerHTML = "Temperatura: " + data.main.temp; 
        
        let CityElement = document.getElementById("Ciudad");
        CityElement.innerHTML = "Ciudad: " + data.name; 
}

let LatElement = document.getElementById("Latitud");
let LongElement = document.getElementById("Longitud");
Latitud = LatElement.value;
Longitud = LongElement.value;
console.log(Latitud);
console.log(Longitud);

request.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat="+Latitud+"&lon="+Longitud+"&appid=8e59d540bf55d8460dc988843b8c7cbb&units=metric", true);
request.send();
    
}