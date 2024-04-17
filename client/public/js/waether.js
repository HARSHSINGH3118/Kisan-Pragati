const apiKey = "593fca1da5af77469581af6731d45c61";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "/client/public/assets/cloudy.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "/client/public/assets/sun.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "/client/public/assets/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = " /client/public/assets/rainy.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "/client/public/assets/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
