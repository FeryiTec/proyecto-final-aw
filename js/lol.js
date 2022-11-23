// Variables
let SName;

// Constantes
const RIOT_API_KEY = "RGAPI-72bff262-4df4-497e-b68d-b109c9687df0"

function LoLAPI() {
    
    // Iniciamos el Request
    let request = new XMLHttpRequest();

    request.onload = function (resp) {
        console.log(resp.target.response);
        console.log(JSON.parse(resp.target.response));
        
        let data = JSON.parse(resp.target.response);
        console.log(data);
        
        let dataElement = document.getElementById("Nivel");
        dataElement.innerHTML = "Nivel: " + data.summonerLevel; 
        
        let dataElement2 = document.getElementById("IconLOL");
        dataElement2.src = "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/"+data.profileIconId+".png";
    }

    let SNameElement = document.getElementById("SName");
    SName = SNameElement.value;
    console.log(SName);

    request.open('GET', "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+SName+"?api_key="+RIOT_API_KEY, true);
        
    request.send();
}