import { useState } from "react";

export default function Counter(){
    const [value,setValue] = useState(0);
    return(
        <div className="heading">
            <h1>Counter App</h1>
            <p>Count: {value}</p>
            <button type="button" onClick={(e) => {setValue(value+1)}}>Increment</button>
            <button type="button" onClick={(e) => {setValue(value-1)}}>Decrement</button>
        </div>
    );
}