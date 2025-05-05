import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./counterSlice";

const Counter =() => {

    const count = useSelector((state) => state.counter.value);
    // localStorage.setItem('count', count);
    // /* const incrementValue = localStorage.getItem('count');*/
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick = {() => dispatch (increment())}>Increment</button>
                <button onClick = {() => dispatch (decrement())}>Decrement</button>
                {/* <button>IncrementByAmount</button> */}
            </div>

        </div>
    )      
}


export default Counter;