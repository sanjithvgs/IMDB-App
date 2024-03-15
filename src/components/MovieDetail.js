import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const [movieDetail, setmovieDetail] = useState({})
    const Param = useParams();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${Param.movieID}?api_key=9f48a5b363c49e0c31bf3d09bb319827`)
        .then((res)=> res.json())
        .then((data) => setmovieDetail(data));
    }, []);

    return(
        <div>
            <h1>Movie Detail</h1>
            <hr/>
            <h2>{movieDetail.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}></img>
            <p>{movieDetail.overview}</p>
        </div>
    )
}

export default MovieDetail;