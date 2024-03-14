import AddMovie from "./AddMovie";
import Header from "./Header";
import Heading from "./Heading";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const MovieApp = () => {
    return(
        <div className="body">

            <Header />
            <Heading />
            <MovieList />
            <MovieDetail />
            <AddMovie />

        </div>
    );
}

export default MovieApp;