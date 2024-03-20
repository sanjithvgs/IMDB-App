import { useEffect, useState } from "react";

const MovieFavourites = () =>{

    const  [favourite, setFavourite] = useState([]);

    useEffect(()=>{
        const favouriteData = localStorage.getItem("favourite");
        setFavourite(JSON.parse(favouriteData));
    },[]);

    return(
        <div>
            <h1>Favourite Movies</h1>
            <div className="favourite-wrapper">
                <div className="left-section"></div>
                <div className="right-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Popularity</th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            favourite.map((item)=>{
                                <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.genre_ids[0]}</td>
                                    <td>{item.popularity}</td>
                                    <td>{item.vote_average}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MovieFavourites;