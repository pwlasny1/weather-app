const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=3e2af98d1b9a5b053c6baa8a498bb949'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'Lodz'
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL).then(res => 
        {
           const temp = res.data.main.temp 
           const hum = res.data.main.humidity
           const status = Object.assign({}, ...res.data.weather)
           console.log(status.id);

           //photo.setAttribute('src', '')

           weather.textContent = status.main
           cityName.textContent = res.data.name
           temperature.textContent = Math.floor(temp)+ '°C'
           humidity.textContent = hum + '%'

})

}
getWeather()
button.addEventListener('click', getWeather)