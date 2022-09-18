import { useEffect, useState } from "react"
import './App.css'
import Footer from "./components/Footer"
import MovieCard from './components/MovieCard'

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    if (title) {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      console.log(data)
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    searchMovies('all')
  }, [])

  return (
    <div className="App">
      <div className="header-search">
        <nav className="text-center">
          <h1 className="text-light display-1">
            MovieLand
          </h1>
        </nav>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Search for movies" onChange={(e) => {setSearchTerm(e.target.value); searchMovies(searchTerm)}} />
          <button type="button" className="btn btn-outline-success" onClick={()=>searchMovies(searchTerm)}>Search</button>
        </div>
      </div>

      {/*Divider*/}
      <hr/>

      <div className="card-group">
        {
          movies?.length > 0 ?
            movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
            :
            <div className="display-6 text-light">No movies found</div>
        }
      </div>


      <Footer />
    </div>
  )
}

export default App