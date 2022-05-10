import {requestCity} from './request.js';

const searchForm = document.querySelector('.search-location');
const city = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const cardInfo = document.querySelector('.back-card');
const timeImage = document.querySelector('.card-top img');

const getCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) {
        return true;
    } else {
        return false;
    }
}

function updateWeatherApp(city) {
   cityName.textContent = city.name;
   const iconSrc = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
   cardBody.innerHTML = `
   <div class="card-mid row">
   <div class="col-8 text-center temp">
     <span>${getCelsius(city.main.temp)}&deg;C</span>
   </div>
   <div class="col-4 condition-temp">
     <p class="condition">${city.weather[0].description}</p>
     <p class="high">${getCelsius(city.main.temp_max)}&deg;C</p>
     <p class="low">${getCelsius(city.main.temp_min)}&deg;C</p>
   </div>
 </div>

 <div class="icon-container mx-auto card shadow">
     <img src=${iconSrc} alt="">
 </div>
 <div class="card-bottom row px-5 py-4">
   <div class="col text-center">
       <p>${getCelsius(city.main.feels_like)}&deg;C</p>
       <span>Feels Like</span>
     </div>
     <div class="col text-center">
       <p>${city.main.humidity}%</p>
       <span>Humidity</span>
     </div>
 </div>`

 if (isDayTime(city.weather[0].icon)) {
     timeImage.setAttribute('src', 'img/day.svg');
     if (cityName.classList.contains('text-white')) {
        cityName.classList.remove('text-white')
     } else {
         cityName.classList.add('text-dark');
     }

 } else {
    timeImage.setAttribute('src', 'img/night.svg');
    if(cityName.classList.contains('text-dark')) {
    cityName.classList.remove('text-dark');
    }
    cityName.classList.add('text-white');
 }
 cardInfo.classList.remove('d-none');
}

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const citySearch = city.value.trim();
    console.log(citySearch);
    searchForm.reset();

     requestCity(citySearch)
    .then((data) => {
        updateWeatherApp(data)
    })
    .catch((err) => console.log(err));
})