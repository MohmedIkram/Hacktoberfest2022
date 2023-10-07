const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
	search.classList.toggle("active");
};



 const apiKey = ''; // Enter yuour api key here

const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', function() {

  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;


  fetchWeatherData(city);
});


const cityList = document.getElementsByClassName('city');


for (let i = 0; i < cityList.length; i++) {
  cityList[i].addEventListener('click', function() {
    const city = this.textContent;
    fetchWeatherData(city);
  });
}


function fetchWeatherData(city) {
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found!');
      }
      return response.json();
    })
    .then(data => {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const maxtemp = Math.round(data.main.temp_max - 273.15);
        const mintemp = Math.round(data.main.temp_min - 273.15);
        // const location = `Latitude =` + data.coord.lat + `\nLongitude =` + data.coord.lon;
        const pressure = data.main.pressure;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const wind = data.wind.speed;
        let weatherIcon;
       if (temperature >= 20) {
           weatherIcon = "Temperature: ☀️";
       }
       else weatherIcon = "Temperature: ❄️";

        var date = new Date(sunrise * 1000);
        var hours = date.getHours();    
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2) ;

      var dat2 = new Date(sunset * 1000);
      var hour = dat2.getHours();
      var min = "0" + dat2.getMinutes();
      var sunsetime = hour + ":" + min.substr(-2);


      document.getElementById('city').textContent = "City:" + city;
      document.getElementById('temperature').textContent = weatherIcon + temperature + '°C';
      document.getElementById('description').textContent = description;
      // document.getElementById('maxtemp').textContent = maxtemp;
      // document.getElementById('mintemp').textContent = mintemp;
      // document.getElementById('location').textContent = "Location 🗺️" + location;
      document.getElementById('Pressure').textContent = "Pressure:" + pressure + "mbar";
      document.getElementById('sunrise').textContent = "Sunrise Time 🌄: " + formattedTime;
      document.getElementById('sunset').textContent = "sunset Time 🌅: " + sunsetime;
      document.getElementById('wind').textContent = "wind Speed 🍃" + wind + "KM/H" ;
    })
    .catch(error => {
      console.log(error);
      
      document.getElementById('city').textContent = 'Error';
      document.getElementById('temperature').textContent = '';
      document.getElementById('description').textContent = error.message;
    });
}