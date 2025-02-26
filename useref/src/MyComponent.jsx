import { useRef } from "react";
import { useState, useEffect } from "react";

function MyComponent() {
    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null);
    let inputRef3 = useRef(null);

    useEffect(() => {
        console.log(`Render`);
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "green";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "green";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return (
        <>
        <button onClick={handleClick1}>Focus Input Box1</button>
        <br /><br />
        <input ref={inputRef1} />
        <br /><br />
        <button onClick={handleClick2}>Focus Input Box2</button>
        <br /><br />
        <input ref={inputRef2} />
        <br /><br />
        <button onClick={handleClick3}>Focus Input Box3</button>
        <br /><br />
        <input ref={inputRef3} />
        </>
    );
}

export default MyComponent;