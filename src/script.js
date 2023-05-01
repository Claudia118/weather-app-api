//Getting Dates and time
let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", " Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();

let appDate = document.querySelector("#date");
appDate.innerHTML = `${day} ${hour}:${minutes}`;

//selecting the form and values
function searchCity(event) {
  event.preventDefault();

  //selecting the city input
  let searchCity = document.querySelector("#city");

  //selecting and changing the city display on app
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = searchCity.value.charAt(0).toUpperCase() + searchCity.value.slice(1);

  getCity(searchCity.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
  console.log(response);
  let celsiusTemp = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#temperature");
  tempDisplay.innerHTML = celsiusTemp;

  let description = response.data.weather[0].main;
  let dayDescription = document.querySelector("#description");
  dayDescription.innerHTML = description;

  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = humidity;

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = wind;
}
function getCity(city) {
  //Getting information from api
  let apiKey = "f3009e4852fa0a079dab291dabf020c4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

  axios.get(`${apiUrl}&q=${city}&appid=${apiKey}`).then(showTemperature);
}

// function showTemp(response) {
//   console.log(response);
// }

// function getPosition(position) {
//   console.log(position);
//   let latitude = position.coords.latitude;
//   console.log(latitude);

//   let longitude = position.coords.longitude;
//   console.log(longitude);

//   //Getting information from api
//   let apiKey = "f3009e4852fa0a079dab291dabf020c4";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//   console.log(apiUrl);

//   axios.get(apiUrl).then(showTemp);
// }

// function getCurrentPosition() {
//   //Geolocation
//   navigator.geolocation.getCurrentPosition(getPosition);
// }

// let currentBtn = document.querySelector("#geoLocation");
// currentBtn.addEventListener("click", getCurrentPosition);
