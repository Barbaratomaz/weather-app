//
// Date and Hour
//

let now = new Date();

console.log(new Date());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
console.log(day);

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let h6 = document.querySelector(".header-pretitle");
h6.innerHTML = `Today, ${day} ${hour}:${minute}`;

//
//
//

let cardDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let firstDay = cardDays[now.getDay()];
let secondDay = cardDays[now.getDay() + 1];
let thirdDay = cardDays[now.getDay() + 2];
let fourthDay = cardDays[now.getDay() + 3];
console.log(fourthDay);

let firstCardDay = document.querySelector("#card-title-01");
firstCardDay.innerHTML = `${firstDay}`;

let secondCardDay = document.querySelector("#card-title-02");
secondCardDay.innerHTML = `${secondDay}`;

let thirdCardDay = document.querySelector("#card-title-03");
thirdCardDay.innerHTML = `${thirdDay}`;

let fourthCardDay = document.querySelector("#card-title-04");
fourthCardDay.innerHTML = `${fourthDay}`;

//
//
//

let h3 = document.querySelector("#header-title");
let time = now.getHours();
if (time < 12) {
  h3.innerHTML = `Good Morning`;
} else if (time >= 12 && time <= 17) {
  h3.innerHTML = `Good Afternoon`;
} else if (time >= 17 && time <= 24) {
  h3.innerHTML = `Good Evening`;
}

//
// Current Location
//

function displayWeatherIn(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.list[0].main.temp);
  let h1 = document.querySelector(".big-temperature");
  h1.innerHTML = `${currentTemp}`;

  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = response.data.city.name;

  let currentConditions = response.data.list[0].weather[0].description;
  let upperCase =
    currentConditions.charAt(0).toUpperCase() + currentConditions.slice(1);
  let conditionsElement = document.querySelector(".weather-condition");
  conditionsElement.innerHTML = `${upperCase}`;

  let currentHumidity = response.data.list[0].main.humidity;
  let humidityElement = document.querySelector("#current-humidity");
  humidityElement.innerHTML = `${currentHumidity} %`;

  let currentWind = Math.round(response.data.list[0].wind.speed);
  let windElement = document.querySelector("#current-wind");
  windElement.innerHTML = `${currentWind} km/h`;

  let maxTemp1 = Math.round(response.data.list[0].main.temp_max);
  let card1Max = document.querySelector("#max-t-1");
  card1Max.innerHTML = `${maxTemp1}°`;

  let minTemp1 = Math.round(response.data.list[0].main.temp_min);
  let card1Min = document.querySelector("#min-t-1");
  card1Min.innerHTML = `${minTemp1}°`;

  let maxTemp2 = Math.round(response.data.list[1].main.temp_max);
  let card2Max = document.querySelector("#max-t-2");
  card2Max.innerHTML = `${maxTemp2}°`;

  let minTemp2 = Math.round(response.data.list[1].main.temp_min);
  let card2Min = document.querySelector("#min-t-2");
  card2Min.innerHTML = `${minTemp2}°`;

  let maxTemp3 = Math.round(response.data.list[2].main.temp_max);
  let card3Max = document.querySelector("#max-t-3");
  card3Max.innerHTML = `${maxTemp3}°`;

  let minTemp3 = Math.round(response.data.list[2].main.temp_min);
  let card3Min = document.querySelector("#min-t-3");
  card3Min.innerHTML = `${minTemp3}°`;

  let maxTemp4 = Math.round(response.data.list[3].main.temp_max);
  let card4Max = document.querySelector("#max-t-4");
  card4Max.innerHTML = `${maxTemp4}°`;

  let minTemp4 = Math.round(response.data.list[3].main.temp_min);
  let card4Min = document.querySelector("#min-t-4");
  card4Min.innerHTML = `${minTemp4}°`;

  let maxTemp5 = Math.round(response.data.list[4].main.temp_max);
  let card5Max = document.querySelector("#max-t-5");
  card5Max.innerHTML = `${maxTemp5}°`;

  let minTemp5 = Math.round(response.data.list[4].main.temp_min);
  let card5Min = document.querySelector("#min-t-5");
  card5Min.innerHTML = `${minTemp5}°`;

  let maxTemp6 = Math.round(response.data.list[4].main.temp_max);
  let card6Max = document.querySelector("#max-t-6");
  card6Max.innerHTML = `${maxTemp6}°`;

  let minTemp6 = Math.round(response.data.list[4].main.temp_min);
  let card6Min = document.querySelector("#min-t-6");
  card6Min.innerHTML = `${minTemp6}°`;
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "9b06bfd491f116ce539dc3e30afcca26";
  let urlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(urlPosition);
  axios.get(urlPosition).then(displayWeatherIn);
}

function currentPosition() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

let positionButton = document.querySelector("#location-button");
positionButton.addEventListener("click", currentPosition);

//
// Search
//

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apiKey = "9b06bfd491f116ce539dc3e30afcca26";
  let urlApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(urlApi).then(displayWeatherIn);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//
// Forecast
//

//function forecast(event) {
//  event.preventDefault();
//  let searchInput = document.querySelector("#search-input");
//  let apiKey = "9b06bfd491f116ce539dc3e30afcca26";
//  let urlApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value},us&mode=xml&appid=${apiKey}&units=metric`;
//  axios.get(urlApi).then(displayWeatherIn);
//}

//let formForecast = document.querySelector("#search-form");
//formForecast.addEventListener("submit", forecast);

//console.log(displayWeatherIn);

//let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
//https://api.openweathermap.org/data/2.5/forecast?q=dublin,us&mode=xml&appid=9b06bfd491f116ce539dc3e30afcca26&units=metric
