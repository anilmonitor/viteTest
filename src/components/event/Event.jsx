let name = "MR ANIL"

function hello() {
    console.log("Hello");
}

function welcome() {
    console.log(`Hello ${name} Welcome!!`);
}

function handleHover(){
    console.log("You hover paragraph");
}

function handleDoubleClick(){
    console.log("You double click me!!");
}
export default function Event() {
    return (
        <div className="cont" style={{color: "red"}}>
            <button onClick={hello}>Click me !!</button>
            <p onClick={welcome} style={{ color: "white" }}>Click me to Greet</p>

            <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam.</p>
            <button onDoubleClick={handleDoubleClick}>Double click</button>
        </div>
    )
};