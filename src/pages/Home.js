import React from 'react'
import Main from '../componnent/Main'
import Row from '../componnent/Row'
import requests from '../request'

function Home() {
  return (
    <div>
    <Main />
    
    <Row rowId='1' title='TopRatedMovies' fetchURL={requests.requestTopRatedMovies}/>
    <Row rowId='2' title='ActionMovies' fetchURL={requests.requestActionMovies}/>
    <Row rowId='3' title='ComedyMovies' fetchURL={requests.requestComedyMovies}/>
    <Row rowId='4' title='HorrorMovies' fetchURL={requests.requestHorrorMovies}/>
    <Row rowId='5' title='NetflixOriginals' fetchURL={requests.requestNetflixOriginals}/>
    <Row rowId='6' title='RomanceMovies' fetchURL={requests.requestRomanceMovies}/>
    <Row rowId='7' title='Documentaries' fetchURL={requests.requestDocumentaries}/>
    </div>
  )
}

export default Home