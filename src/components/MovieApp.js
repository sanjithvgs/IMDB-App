import AddMovie from "./AddMovie";
import Header from "./Header";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 <Header />
//                 <MovieList />
//             </>
//         ),
//     },
//     {
//         path: "/movie-detail/:movieID",
//         element: (
//             <>
//                  <Header />
//                 <MovieDetail />
//             </>
//         ),
//     },
//     {
//         path: "/add-movie",
//         element: (
//             <>
//                  <Header />
//                 <AddMovie />
//             </>
//         ),
//     },
    
// ]);



// const MovieApp = () => {
//     return(
//         <div className="body">
//             <RouterProvider router={router}></RouterProvider>
//         </div>
//     );
// }

const MovieApp = () => {
    return(
        <BrowserRouter>
             <Header />
            <Routes>
                <Route path="/" element={<MovieList />}></Route>
                <Route path="/movie-detail/:movieID" element={<MovieDetail />}></Route>
                <Route path="/add-movie" element={<AddMovie />}></Route>
            </Routes>
        
        </BrowserRouter>
    );
}

export default MovieApp;