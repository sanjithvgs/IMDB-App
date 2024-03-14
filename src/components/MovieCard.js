

const MovieCard = ({movie}) =>{
    return(
        <div className="movie-card">
            <div>
                
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <h4>{movie.title}</h4>
            </div>
        </div>
    );

}

export default MovieCard;