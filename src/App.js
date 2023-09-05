import './App.css';
import requests from './api/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title ="NETFLIX ORIGINALS"
        id="NO"
        fetchURl={requests.fetchNetflixOriginals} 
        isLargeRow 
      />

      <Row title ="Trending Now" id="TN" fetchURl={requests.fetchTrending} />
      <Row title ="Top Rated" id="TR" fetchURl={requests.fetchTopRated} />
      <Row title ="Action Movies" id="AM" fetchURl={requests.fetchActionMovies} />
      <Row title ="Comedy Movies" id="CM" fetchURl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;

