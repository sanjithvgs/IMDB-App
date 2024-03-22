import { useEffect, useState } from "react";

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

const MovieFavourites = () =>{

    const [favourite, setFavourite] = useState([]);
    const [filterFavourite , setfilterFavourite] = useState([]); 
    const [genres, setGenre] = useState([]);
    const [SelectedGenreId, setSelectedGenreId] = useState("");
 
    useEffect(()=>{
        const favouriteData = JSON.parse(localStorage.getItem("favourite" || "[]"));
        const genresData = favouriteData.map(data => data.genre_ids[0]);
        setGenre(Array.from(new Set(genresData)));
        setFavourite(favouriteData);
        setfilterFavourite(favouriteData);
    },[]);

    const handleGenreSelected = (e)=>{
        const id= e.target.dataset.id;
        setSelectedGenreId(id);
    }

    useEffect(()=>{
        setfilterFavourite(()=>{
            return favourite.filter(movie => !SelectedGenreId  || movie.genre_ids[0] == SelectedGenreId);
        }) 
    },[SelectedGenreId, favourite]);

    const handleMovieSearch = (e) =>{
        const text = e.target.value;
        setfilterFavourite(()=>{
            return favourite.filter(movie => movie.title.toLowerCase().includes(text));
        }) 
    }

    const handlePopularitySortingAsc = ()=>{
        setfilterFavourite(()=>{
            return [...favourite].sort((a,b)=>{
                return a.popularity - b.popularity;
            });
        }) 
    }

    const handlePopularitySortingDes = ()=>{
        setfilterFavourite(()=>{
            return [...favourite].sort((a,b)=>{
                return b.popularity - a.popularity;
            });
        }); 
    };

    const handleMovieDelete = (movieID) =>(e) =>{
        setFavourite((prevFavourites) =>{
            const movieIdx = prevFavourites.findIndex(fav => fav.id == movieID);
            const finalFav = [...prevFavourites];
            finalFav.splice(movieIdx, 1);
            localStorage.setItem("favourite",JSON.stringify(finalFav));
            return finalFav;
        })

    }


    return(
        <div>
            <h1>Favourite Movies</h1>
            <div className="favourite-wrapper">
                <div className="left-section">
                    <div className="genre-wrapper">
                        <div className={`genre ${SelectedGenreId === "" ? "selected" :""}`}
                        onClick={handleGenreSelected} data-id="">All Genre</div>
                        {
                            genres.map(genre => (
                                <div className={`genre ${SelectedGenreId == genre ? "selected" :""}`}
                                     onClick={handleGenreSelected} data-id={genre}>{genreids[genre]}
                                     </div>
                            ))
                        }
                    </div>
                </div>

                <div className="right-section">
                    <input type="text" placeholder="Search Movie.." onChange={handleMovieSearch}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th><span onClick={handlePopularitySortingDes}>D</span>
                                    Popularity
                                    <span onClick={handlePopularitySortingAsc}>A</span>
                                    </th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            filterFavourite.map((item)=>(
                                <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} style={{width: "100px"}}/></td>
                                    <td>{item.title}</td>
                                    <td>{genreids[item.genre_ids[0]]}</td>
                                    <td>{item.popularity}</td>
                                    <td>{item.vote_average}</td>
                                    <td><button className="Watchlist remove" onClick={handleMovieDelete(item.id)}>Remove from Watchlist</button></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MovieFavourites;