import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const inc = () => setCount(count+1);
    const dec = () => setCount(count-1);
    const reset = () => setCount(0);

    return(
        <div className="counter-container">
            <p className="counter-display">{ count }</p>
            <button onClick={inc} className="counter-btn">Increment</button>
            <button onClick={dec} className="counter-btn">Decrement</button>
            <button onClick={reset} className="counter-btn">Reset</button>
        </div>
    );
}

export default Counter;