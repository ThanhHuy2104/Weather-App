const ApiKey = '6d0ef305cadcbf823afd100fd8c90f63'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const sreachBox = document.querySelector('.searchInput')
const buttonBox = document.querySelector('.searchbtn')
const weatherIcon = document.querySelector('.weather-icon')
function checkWeather(city) {

    fetch(apiUrl + city + `&appid=${ApiKey}`)
        .then(function (response) {
            if (!response.ok) {
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.weather').style.display = 'none';
            }
            return response.json();
        })
        .then(function (data) {
            var dataWeather = data;
            document.querySelector('.city').innerHTML = dataWeather.name;
            document.querySelector('.temp').innerHTML = dataWeather.main.temp + '°c'
            document.querySelector('.humidity').innerHTML = dataWeather.main.humidity + '%'
            document.querySelector('.wind').innerHTML = dataWeather.wind.speed + ' km'
            if (data.weather[0].main === 'Clouds') {
                weatherIcon.src = "./assets/img/clouds.png"
            }
            else if (data.weather[0].main === 'Rain') {
                weatherIcon.src = "./assets/img/rain.png"
            }
            else if (data.weather[0].main === 'Clear') {
                weatherIcon.src = "./assets/img/clear.png"
            }
            else if (data.weather[0].main === 'Mist') {
                weatherIcon.src = "./assets/img/mist.png"
            }
            else if (data.weather[0].main === 'Drizzle') {
                weatherIcon.src = "./assets/img/drizzle.png"
            }

            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.error').style.display = 'none';

        })

}

buttonBox.addEventListener('click', function () {
    checkWeather(sreachBox.value)
})
