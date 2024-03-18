import { useRef } from "react";

const AddMovie = () => {

    const nameRef = useRef();
    const ratingRef = useRef();

    const HandleSubmit = () =>{

    }

    return(
        
        <div className="add-movie-form">
            <h1>Add Movie</h1>

            <div>
                <input ref={nameRef} placeholder="Add new movie name"/>
            </div>

            <div>
                <input ref={ratingRef} type="numer" placeholder="Enter rating"/>
            </div>

            <button onClick={HandleSubmit}>Add</button>
        </div>
    )
}

export default AddMovie;