import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [first,setFirst]= useState(true);
  const API_KEY="f33a484cf794d08d0148764789aaba32";
  const [url,setUrl] = useState("");
  const [query,setQuery]=useState("");
  // const [bg,setBg] = useState(null);
  const [data,setData] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    if(first){
      navigator.geolocation.getCurrentPosition((position)=>{
        setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
      });
      setFirst(false);
    }
  })

  const bgFetch=(bg_url) => {
    fetch(bg_url).then((res)=>res.json()).then((res_data)=>{
      if(res_data.hits.length > 0){
        document.querySelector("body").style.background=`url("${res_data.hits[0].largeImageURL}") no-repeat center center / cover`;
        setLoading(false);
      }else{
        document.querySelector("body").style.background=`url("https://picsum.photos/1000") no-repeat center center / cover`;
        setLoading(false);
      }
    })
  }

  useEffect(()=>{
    // bgFetch("vid",`https://pixabay.com/api/videos/?key=25542230-09de3122e21c274619f940a68&q=${data.name}&pretty=true`);
      fetch(`https://pixabay.com/api/?key=25542230-09de3122e21c274619f940a68&q=${data.name}&image_type=photo&pretty=true`).then((res)=>res.json()).then((res_data)=>{
        // console.log(res_data);
        if(res_data.hits.length > 0){
          document.querySelector("body").style.background=`linear-gradient(45deg,rgba(0, 0, 0, 0.393),rgba(255, 0, 0, 0.262)),url(${res_data.hits[0].largeImageURL}) no-repeat center center / cover `;
          // var count=1;
          // setInterval(()=>{
          //   if(count <= res_data.hits.length -1){
          //     document.querySelector("body").style.background=`linear-gradient(45deg,rgba(0, 0, 0, 0.393),rgba(255, 0, 0, 0.262)),url(${res_data.hits[count].largeImageURL}) no-repeat center center / cover `;
          //     count++;
          //   }else{count=0;}
          // },15000)
        }
        else{
          document.querySelector("body").style.background=`linear-gradient(45deg,rgba(0, 0, 0, 0.393),rgba(255, 0, 0, 0.262)),url("https://picsum.photos/1000") no-repeat center center / cover`;
        }
      })
      // bgFetch(`https://pixabay.com/api/?key=25542230-09de3122e21c274619f940a68&q=${data.name}&image_type=photo&pretty=true`);
    
  },[data])

  useEffect(()=>{
    if(!first){
      fetch(url).then((res) => res.json()).then((res_data)=>{
          setData(res_data);
          setLoading(false);
          // console.log(data);
      });
    }
  },[url])
  
  const handleKeyPress=(event)=>{
    if(event.key ==='Enter'){
      setLoading(true);
      setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
    }
  }
  // console.log(data);
  return (
    <div className="App">
      <div className="search_bar">
        <input type="text"
          placeholder="Search.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      {loading && <div className="card">
          <h1>Loading..</h1>
        </div>} 

      {!loading && Object.keys(data).length === 2 && <div className="card">
          <h2>{data.cod}</h2>
          <p>{data.message}</p>
        </div>}

      {!loading && Object.keys(data).length >2 && <div className="card">
        <div className="name">
          <h2>{data.name} <sup>{data.sys.country}</sup></h2>
        </div>
        <div className="temp">
          <h1>{Math.round(data.main.temp)} <sup>&deg;C</sup></h1>
          
        </div>
        <div className="temp2">
          <p>min: {data.main.temp_min}&deg;C</p><h3>|</h3>
          <p>max: {data.main.temp_max}&deg;C</p><h3>|</h3>
          <p>humidity: {data.main.humidity}</p>
        </div>
        {/* <p>{Date(data.dat).toString()}</p> */}
        <div className="weather">
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
          <p>{data.weather[0].description}</p>
        </div>
      </div> }
      
    </div>
  );
  
}

export default App;
