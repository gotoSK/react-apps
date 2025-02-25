import React, {useState} from "react";

function Button() {
    let count = 0;
    
    const [name, setName] = useState("Guest User");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const handleClick = (e) => {
        if (count < 3) {
            count++;
            e.target.textContent = `Alarm-${count}. Bro, I wanna sleep! 😣`;
        }
        else {
            e.target.textContent = `Bro, OK! Waking Up!! 😫`;
        }
    };
    const handleDoubleClick = (e) => e.target.textContent = `Bro, OK! Waking Up!! 😫`;

    const updateName = (updatedName) => setName(updatedName);
    const updateAge = () => setAge(age+1);
    const toggleEmpStatus = () => setIsEmployed(!isEmployed);

    return(
        <>
            <p>Name: {name}, Age:{age}, Employeed: {isEmployed ? "Yes": "No"}</p>
            <button onClick={() => updateName("Mr. Depp")}>Update Name</button>
            <br /><br />
            <button onClick={updateAge}>Increase Age</button>
            <br /><br />
            <button onClick={toggleEmpStatus}>{isEmployed ? "Employeed": "Unemployed"}</button>
            <br /><br />
            <button
                onClick = {(e) => handleClick(e)}
                onDoubleClick = {(e) => handleDoubleClick(e)}
            >Click Me 😪</button>
        </>
    );
}

export default Button;