import React, { useState, useEffect } from "react"

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //Runs after every re-render
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });

    //Runs only on mount
    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // }, []);

    //Runs on mount + when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent