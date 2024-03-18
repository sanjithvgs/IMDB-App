import { Link } from "react-router-dom";


const MovieCard = ({movie, onWatchListUpdate, watchList}) =>{

    const isMovieAdded = watchList.find(list=> list==movie.id);

    const  addToWatchList = function(e){
        const movieID = e.target.dataset.id;
        onWatchListUpdate((prevWatchlist)=>{
            if (prevWatchlist.find(list => list == movieID)){
                return prevWatchlist.filter(item => item !== movieID);
            }else{
                return [...prevWatchlist, movieID];
            }
        });
    }

    return(
        <div className="movie-card">
            <div>
                
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <Link to={`/movie-detail/${movie.id}`}><h6>{movie.title}</h6></Link>     
                <button className={isMovieAdded ? "Watchlist remove" : "Watchlist add"}  data-id={movie.id} onClick={addToWatchList}>
                    {isMovieAdded ? "Remove from Watchlist" : "Add to Watchlist"}
                </button>          
            </div>
        </div>
    );

}

export default MovieCard;