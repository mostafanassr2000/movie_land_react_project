const noMoviePoster = "https://via.placeholder.com/500x600?text=No+Photo"

const MovieCard = ({ movie }) => {
    return (
        <div>
            <div className="card">
                <img className="card-img" src={movie.Poster === 'N/A' ? noMoviePoster : movie.Poster} alt={movie.Title} />
                <div className="card-img-overlay">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Type}</p>
                    <p className="card-text">{movie.Year}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard