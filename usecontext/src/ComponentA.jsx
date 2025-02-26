import { useState, createContext } from "react";

import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA() {
    let [user, setUser] = useState("Mr. Depp");
    return (
        <div className="box">
            <h1>Component-A</h1>
            <h2>Hello, <em>{ user }</em></h2>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>
    );
}

export default ComponentA;