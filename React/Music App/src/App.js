import { useState, useEffect } from "react";
import tren from "./api/trending.json";
import rel from "./api/released.json";
import reco from "./api/reco.json";
import SG from "./components/songCard";
import RG from "./components/recoCard";

function App() {
  const [trending_data, setTrending_data] = useState([]);
  const [released_data, setReleased_data] = useState([]);
  const [reco_data, setReco_data] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pastebin.com/raw/1dN1EkTY")
      .then((req) => req.json())
      .then((res) => {
        console.log(res);
        // setTrending_data(res);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    setTrending_data(tren["BAAHI_BY_XOMOY"]);
    setReleased_data(rel["BAAHI_BY_XOMOY"]);
    setReco_data(reco["BAAHI_BY_XOMOY"]);
    // console.log(tren["BAAHI_BY_XOMOY"]);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="App">Loading</div>;
  } else {
    return (
      <div className="App">
        <div className="header">
          <h1>XOMOY</h1>
        </div>
        <h2>Trending Songs</h2>
        <div className="trendingSection">
          {trending_data.map((data) => {
            return <SG data={data} />;
          })}
        </div>
        <h2>JUST RELEASED</h2>
        <div className="releasedSection">
          {released_data.map((data) => {
            return <SG data={data} />;
          })}
        </div>
        <h2>Recommended Artist</h2>
        <div className="artistSection">
          {reco_data.map((data) => {
            return <RG data={data} />;
          })}
        </div>
        <div className="footer">
          <p>Xomoy &copy; 2022</p> |
          <a href="tel:+916376311616">Contact : 6376311616</a>
        </div>
      </div>
    );
  }
}

export default App;
