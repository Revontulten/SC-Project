let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} ${month} ${date}, ${year}, ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  //document.querySelector("#cityName").innerHTML = response.data.name;
  console.log(response.data);
  document.querySelector("p .dayTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#feeling").innerHTML = Math.round(
    response.data.main.feels_like
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `The Weather Forecast for You in ${searchInput.value}`;
  } else {
    h1.innerHTML = "What kind of weather will be?";
    alert("Please, type a city");
  }
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

/*function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let.dayTemp = document.querySelector(".dayTemp");
  dayTemp.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

/*function retrievePosition(position) {
  let units = "metric";
  let apiKey = "19af349041693323c0826fe145581c72";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}*/

/*let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
let city = "Carlow";
function showWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(dayTemp);
  temperatureElement.innerHTML = response.data.main.temp;
}
axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);*/
//navigator.geolocation.getCurrentPosition(retrievePosition);

/*<td><h2>The Weather today:</h2>
        <h3 class="dateToday">Monday, 1st of April, <h3> </td> 
    <td><div class="emojiToday">☀️</div></td>
      <td>
        <div class="characteristicsToday">
        <p class="temperature"><span class="indicator">Temperature:</span></br><span class="dayTemp">__</span>°C / __°C</p>
         <p class="feel"><span class="indicator">Feels like:</span><br> <span id="feeling">__</span>°C </p>
       </div> </td>
       <td><div class="characteristicsToday">
        <p class="temperature"><span></span>
        
 <p class="humidity"><span class="indicator" >Humidity:</span> <span id = "humidity">__</span>%</p>
 <p class="wind"><span class="indicator">Wind:</span> <span id="wind">__</span>  km/h </p>
       </div> 
      </td>*/
