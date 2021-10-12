
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginalsTV} isLargeRow/>
      <Row title="Trending now" fetchURL={ requests.fetchTrending } />
      <Row title="Top Rated" fetchURL={ requests.fetchTopRated } />
      <Row title="Action" fetchURL={ requests.fetchActionMovies } />
      <Row title="Adventure" fetchURL={requests.fetchAdventureMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Mystery" fetchURL={requests.fetchMysteryMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Drama" fetchURL={requests.fetchDramaMovies}/>
      <Row title="Thriller" fetchURL={requests.fetchThrillerMovies}/>
      <Row title="Family" fetchURL={requests.fetchFamilyMovies}/>
      <Row title="War" fetchURL={requests.fetchWarovies}/>
      <Row title="Science Fiction" fetchURL={requests.fetchScienceFictionMovies}/>
      <Row title="Music" fetchURL={requests.fetchMusicMovies}/>
    </div>
  );
}

export default App;
