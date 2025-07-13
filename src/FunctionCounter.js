import React, { useState } from "react";

function FunctionCounter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    return(
        <div className="counter">
            <h2>Function Component Counter</h2>
            <h3>{count}</h3>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>
    )
}

export default FunctionCounter