const key = "8c6075542fed164a6b7a08357e5f59ae"

function dataScreem(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Clima em " + data.name + " - " + data.sys.country
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector(".min-temp").innerHTML = "Temp. Minima: " + Math.floor(data.main.temp_min) + " °C"
    document.querySelector(".max-temp").innerHTML = "Temp. Maxima: " + Math.floor(data.main.temp_max) + " °C"
    document.querySelector(".img-climate").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".prev").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + data.main.humidity + "%"
}

async function server(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataScreem(data)
}

function clickButton() {
    const city = document.querySelector(".city-name").value

    server(city)
}