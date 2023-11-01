import React from 'react'
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import requests from '../../api/requests';

export default function MainPage() {
  return (
    <div>
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
  )
}
