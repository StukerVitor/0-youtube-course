
function Button() {

    const handleClick = (name) => {
        console.log(`${name} stop clicking me`);
    };

    let count = 0;
    const handleClick2 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s.`)
        } else {
            console.log(`${name} stop clicking me!`)
        }
    };

    const handleClick3 = (event) => {
        event.target.textContent = "OUCH! 😉";
    }

    return (
        <>
            <button onClick={() => handleClick("Vitor")}>Click me 😊</button>
            <hr />
            <button onClick={() => handleClick2("Nath")}>Click me 😊</button>
            <hr />
            <button onDoubleClick={(e) => handleClick3(e)}>Click me 😊</button>
            <hr />
        </>
    );
}

export default Button