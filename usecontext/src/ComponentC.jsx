import ComponentD from "./ComponentD";

import { useContext } from "react";
import { userContext } from "./ComponentA";

function ComponentC() {
    const user = useContext(userContext);

    return (
        <div className="box">
            <h1>Component-C</h1>
            <h2>Hello! once again, <em>{ user }</em></h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC;