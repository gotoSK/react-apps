import { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {}, [dependecies]);
    useEffect(() => {
        document.title = `Count: ${count} ${color === "green" ? "🟢" : "🔴"}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c+1);
    }
    function subCount() {
        setCount(c => c-1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Reduce</button><br />
        <button onClick={changeColor}>Flip Color</button>
        </>
    );
}

export default MyComponent;