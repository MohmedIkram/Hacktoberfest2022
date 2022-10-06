const getBtn = document.getElementById('get-btn');

const getData = () => {
  sendHttpRequest('GET', 'https://api.covid19api.com/summary').then(responseData => {
    

    console.log((responseData.Global.TotalConfirmed).toLocaleString());
    console.log((responseData.Global.TotalRecovered).toLocaleString());
    console.log((responseData.Global.TotalDeaths).toLocaleString());
    console.log((responseData.Global.NewConfirmed).toLocaleString());
    console.log((responseData.Global.NewRecovered).toLocaleString());
    console.log((responseData.Global.NewDeaths).toLocaleString());

    document.getElementById("1").innerHTML=(responseData.Global.TotalConfirmed).toLocaleString();
    document.getElementById("2").innerHTML=(responseData.Global.TotalRecovered).toLocaleString();
    document.getElementById("3").innerHTML=(responseData.Global.TotalDeaths).toLocaleString();
    document.getElementById("4").innerHTML=(responseData.Global.NewConfirmed).toLocaleString();
    document.getElementById("5").innerHTML=(responseData.Global.NewRecovered).toLocaleString();
    document.getElementById("6").innerHTML=(responseData.Global.NewDeaths).toLocaleString();



  });
};

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "5ba97db3-9ef5-1fe3-d494-f6db07ab8df5");

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};


getBtn.addEventListener('click', getData);



