import { useState } from "react";

function OnChange() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [option, setOption] = useState("");
    const [gender, setGender] = useState("");
    const handleName = (e) => setName(e.target.value);
    const handleRating = (e) => setRating(e.target.value);
    const handleOption = (e) => setOption(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    return (
        <>
        <p>Name: <strong>{name}</strong>, Rating: <strong>{rating}</strong> IMDB, <strong>{option}</strong>, <strong>{gender}</strong></p>
        <input value={name} onChange={handleName} placeholder="Actor's Name"/> &nbsp;
        <input value={rating} onChange={handleRating} type="number"/> &nbsp;
        <select value={option} onChange={handleOption}>
            { !option && <option value="">Streaming Site</option> }
            <option value="Netflix">Netflix</option>
            <option value="Amazon Prime">Amazon Prime</option>
            <option value="Apple TV">Apple TV</option>
        </select>
        <input type="radio" value="Male" name="gender" onChange={handleGender} /> Male
        <input type="radio" value="Female" name="gender" onChange={handleGender} /> Female
        <br /><br />
        </>
    )
}

export default OnChange;