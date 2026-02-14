let name = "MR ANIL"

function hello() {
    console.log("Hello");
}

function welcome() {
    console.log(`Hello ${name} Welcome!!`);
}

export default function Event() {
    return (
        <div className="cont">
            <button onClick={hello}>Click me !!</button>

            <p onClick={welcome} style={{ color: "white" }}>Click me to Greet</p>
        </div>
    )
};