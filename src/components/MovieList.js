import Heading from "./Heading";
import MovieCard from "./MovieCard";
import { useState, useEffect, useMemo } from "react";
import Pagination from "./Pagination";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [WatchList, setWatchList] = useState(()=>{
        const favouriteData = localStorage.getItem("favourite" || "[]");
        return (JSON.parse(favouriteData));
    });

    const fetchMovie = (pageNo) =>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }

    const popularMovieCount = useMemo(() => movies.filter((movielist) => movielist.popularity > 1000).length , [movies]);
    
    useEffect(()=>{
        fetchMovie(1);
    },[]);


    return (
        <>
            <Heading />
            Total Watchlist: {WatchList.length}
            {/* <p>High Popularity Movie count: {popularMovieCount}</p> */}
            <div className="movie-list">
            {!movies.length && <h1>Loading . . . . . . . . </h1>}
            {
                movies.map(movie=>(
                    <MovieCard movie={movie} onWatchListUpdate={setWatchList} watchList={WatchList}/>
                ))
            }
            </div>
            <Pagination onPageChange={fetchMovie}/>
        </>
    )
}

export default MovieList;