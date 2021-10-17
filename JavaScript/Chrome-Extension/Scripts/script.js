// Pre-Loader
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".whole-content").style.display = "block";
}, 2000);

// get your API key from https://api.nasa.gov/
const API_KEY = "API_KEY";

// New tab opens
window.addEventListener("load", function () {
  //checking is the user is connected to the internet and show content respectively
  if (navigator.onLine) {
    // NASA API
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        //Background Image
        if (data.url) {
          document.querySelector(
            ".whole-content"
          ).style.backgroundImage = `url("${data.url}")`;
        } else {
          var random = Math.floor(Math.random() * 16) + 1;
          document.querySelector(
            ".whole-content"
          ).style.backgroundImage = `url("./images/offline/${random}.jpg")`;
        }
        if (data.copyright != undefined)
          document.querySelector(
            ".author"
          ).innerHTML = `&copy ${data.copyright}`;
        if (data.title != undefined)
          document.querySelector(".title").innerHTML = `${data.title}`;
      })
      .catch(() => {
        var random = Math.floor(Math.random() * 16) + 1;
        document.querySelector(
          ".whole-content"
        ).style.backgroundImage = `url("./images/offline/${random}.jpg")`;
      });

    // Quote API
    fetch("https://api.quotable.io/random?maxLength=215")
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".quote").innerHTML = `${data.content}`;
        localStorage.setItem("quote", `${data.content}`);
        document.querySelector(".qauthor").innerHTML = `- ${data.author}`;
        localStorage.setItem("author", `${data.author}`);
      })
      .catch(() => {
        document.querySelector(".quote").innerHTML = localStorage.getItem(
          "quote"
        );
        document.querySelector(".qauthor").innerHTML = localStorage.getItem(
          "author"
        );
      });

    // Time
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
      var d = new Date();
      var hour = String(d.getHours());
      var minute = String(d.getMinutes());

      if (minute.length == 1 && hour.length == 1)
        document.querySelector(".time").innerHTML = `0${hour}:0${minute}`;
      else if (hour.length == 1)
        document.querySelector(".time").innerHTML = `0${hour}:${minute}`;
      else if (minute.length == 1)
        document.querySelector(".time").innerHTML = `${hour}:0${minute}`;
      else document.querySelector(".time").innerHTML = `${hour}:${minute}`;
    }
  } else {
    // This means the User is not connected to The Internet
    // Background Image
    var random = Math.floor(Math.random() * 16) + 1;
    document.querySelector(
      ".whole-content"
    ).style.backgroundImage = `url("./images/offline/${random}.jpg")`;

    // Let users know they are offline
    document.querySelector(".offline").style.display = "block";
    document.querySelector(".quote").innerHTML =
      "You're Offline, connect Internet to see new Content.";

    // Hide Menu
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".gear-icon").style.display = "none";

    //Time
    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
      var localTime = new Date().toLocaleTimeString().toString().slice(0, 5);
      document.querySelector(".time").innerHTML = `${localTime}`;
    }
  }
});
