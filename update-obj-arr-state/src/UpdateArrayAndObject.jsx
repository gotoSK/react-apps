import { useState } from "react";

function UpdateArrayAndObject() {
    const [actor, setActor] = useState({name: "Actor", hit: "Movie", born:1900});
    const [movies, setMovie] = useState(["Fight Club", "Inception"]);

    function handleName(e) {
        setActor(a => ({...a, name: e.target.value})); // updater function and spread operator
    }
    function handleHit(e) {
        setActor(a => ({...a, hit: e.target.value})); // updater function and spread operator
    }
    function handleBorn(e) {
        setActor(a => ({...a, born: e.target.value})); // updater function and spread operator
    }

    function addMovie() {
        const newMovie = document.getElementById("movie-input").value;
        document.getElementById("movie-input").value = ""; // reset the text field
        setMovie(m => ([...m, newMovie]));
    }
    function delMovie(i) {
        setMovie(m => m.filter((_, ind) => i!==ind));
    }

    return (
        <>
        <div className="my-container">
            <p><strong>{actor.name}</strong> was born in <strong>{actor.born}</strong>. Also known from the movie <strong>{actor.hit}</strong>.</p>
    
            <input type="text" value={actor.name} onChange={handleName}/>
            <input type="text" value={actor.hit} onChange={handleHit}/>
            <input type="number" value={actor.born} onChange={handleBorn}/>
        </div>
        <div className="my-container">
            <ol>
                {movies.map((movie, i) =>
                    <li key={i} onClick={() => delMovie(i)}>
                        { movie }
                    </li>
                )}
            </ol>
            <input type="text" placeholder="Enter a movie name" id="movie-input"/>
            <button onClick={addMovie}>Add Movie</button>
        </div>
        </>
    );
}

export default UpdateArrayAndObject;