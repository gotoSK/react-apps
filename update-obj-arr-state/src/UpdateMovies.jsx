import { useState } from "react";

function UpdateMovies() {
    const [movies, setMovie] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [director, setDirector] = useState("");
    const [genre, setGerne] = useState("");

    function addMovie() {
        const newMovie = {year: year, director: director, genre: genre};
        setMovie(m => [...m, newMovie]);
        setYear(new Date().getFullYear());
        setDirector("");
        setGerne("");
    }
    function delMovie(index) {
        setMovie(m => m.filter((_,i) => i!=index));
    }
    function changeYear(e) {
        setYear(e.target.value);
    }
    function changeDirector(e) {
        setDirector(e.target.value);
    }
    function changeGenre(e) {
        setGerne(e.target.value);
    }

    return (
        <div className="my-container">
            <h2>List of Movie Objects</h2>
            <ul>
                {movies.map((movie, index) =>
                    <li key={index} onClick={() => delMovie(index)}>
                        { movie.year } { movie.director } { movie.genre }
                    </li>
                )}
            </ul>
            <input type="number" value={year} onChange={changeYear} placeholder="Year"/> <br /><br />
            <input type="text" value={director} onChange={changeDirector} placeholder="Director"/> <br /><br />
            <input type="text" value={genre} onChange={changeGenre} placeholder="Genre"/> <br /><br />
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}

export default UpdateMovies;