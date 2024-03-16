import Heading from "./Heading";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovie = (pageNo) =>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }
    
    useEffect(()=>{
        fetchMovie(1);
    },[]);


    return (
        <>
            <Heading />
            <div className="movie-list">

            {
                movies.map(movie=>(
                    <MovieCard movie={movie}/>
                ))
            }
            </div>
            <Pagination onPageChange={fetchMovie}/>
        </>
    )
}

export default MovieList;